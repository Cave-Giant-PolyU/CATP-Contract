import ObsClient from 'esdk-obs-nodejs'
import { getAccountAddr } from './contracts/account-contract.mjs'
import { mintAsset } from './contracts/asset-contract.mjs'
import { dynamo, TABLE_NAME_CDAP_MGR } from './dynamo.mjs'
import crypto from 'crypto'

const WEB3_OBS_ENDPOINT = 'obs.cn-north-4.myhuaweicloud.com'
const WEB3_OBS_BUCKET = 'static-website.cavegiant.com'
const ASSET_URI_PREFIX = 'cdap/web3/asset/token-uri'

const NFT_EXTERNAL_URL_BASE = 'https://www.cavegiant.com/cdap'

/**
 * 处理订单完成事件
 * 1. Construct Asset NFT metadata file to OBS
 * 2. Mint NFT on chain
 * 3. Sync NFT data to dynamoDB
 * （失败后需要抛出异常并重试）
 * @param {*} snsMsg SNS message
 */
export async function dealWithOrderFinish(snsMsg) {
  console.log(`[Mint NFT] Start to mint NFT for user ${snsMsg.data?.userId} with asset ${snsMsg.data?.assetId}`)

  if (!snsMsg.data) {
    throw new Error('Invalid message')
  }

  const { assetId, assetName, userId, creatorId, creatorName, ownerId, ownerName, hash, snapshot, orderId } =
    snsMsg.data
  if (!assetId || !userId || !orderId || !hash) {
    throw new Error('Invalid message data')
  }

  // 1. Upload NFT metadata file to obs
  const to = getAccountAddr(userId)
  const tokenId = `0x${crypto.randomBytes(32).toString('hex')}`
  const nftMetadata = constructNFTMetadata(to, tokenId, {
    assetId,
    assetName,
    assetHash: hash.startsWith('0x') ? hash : `0x${hash}`,
    creatorName,
    creatorAddr: getAccountAddr(creatorId),
    ownerName,
    ownerAddr: getAccountAddr(ownerId),
    purchaseTime: new Date().toLocaleString(),
    snapshot
  })
  const tokenHash = await uploadMetadataFile(nftMetadata, `${ASSET_URI_PREFIX}/${tokenId.replace('0x', '')}.json`)
  if (!tokenHash) {
    throw new Error(`Failed to upload metadata file`)
  }

  // 2. Mint NFT on chain
  const result = await mintAsset({
    to,
    tokenId,
    tokenURI: `${ASSET_URI_PREFIX}/${tokenId.replace('0x', '')}.json`,
    tokenHash,
    assetHash: hash.startsWith('0x') ? hash : `0x${hash}`
  })
  if (!result?.txHash || !result?.returnValue) {
    throw new Error('Failed to mint NFT')
  }
  const { txHash, returnValue } = result
  const contractReturn = JSON.parse(returnValue)
  const contractId = contractReturn.contractId

  // 3. Sync NFT data to dynamoDB
  await setWeb3InfoToDynamo(userId, orderId, { contractId, txHash, tokenId }).catch(() => {})
}

function constructNFTMetadata(
  accountAddr,
  tokenId,
  { assetId, assetName, assetHash, creatorName, creatorAddr, ownerName, ownerAddr, purchaseTime, snapshot }
) {
  const description = `## Meta Bridge Asset｜${assetName}

Grant user ${accountAddr} to prove that he purchased this asset on the Meta Bridge platform. Asset information is as follows:


* **Asset file hash**: ${assetHash}
* **Asset creator name**: ${creatorName}
* **Asset creator address**: ${creatorAddr}
* **Physical asset owner**: ${ownerName}
* **Physical asset owner address**: ${ownerAddr}


*Purchase time: ${purchaseTime}*

---

授予用户 0x${accountAddr}，证明其在元桥数字资产平台购买此资产。资产信息如下：


* 资产文件hash：${assetHash}
* 资产创作者名称：${creatorName}
* 资产创作者地址：${creatorAddr}
* 实物资产拥有者：${ownerName}
* 实物资产拥有者地址：${ownerAddr}


*购买时间：${purchaseTime}*
`
  return {
    name: assetName,
    description,
    image: snapshot,
    // animation_url: '<HTML>HTML</HTML>',
    attributes: [
      {
        trait_type: 'Creator',
        value: creatorName || 'Unknown'
      }
    ].concat(ownerName ? [{ trait_type: 'Owner', value: ownerName }] : []),
    external_url: `${NFT_EXTERNAL_URL_BASE}/#/asset/${assetId}/detail`,
    asset_hash: assetHash || '',
    token_id: tokenId
  }
}

async function setWeb3InfoToDynamo(userId, orderId, { contractId, txHash, tokenId }) {
  return await dynamo
    .update({
      TableName: TABLE_NAME_CDAP_MGR,
      Key: {
        PK: `u#${userId}`,
        SK: `or#${orderId}`
      },
      UpdateExpression: 'SET #web3SmartContractId = :contractId, #web3Token = :tokenId, #web3TxHash = :txHash',
      ConditionExpression: 'attribute_exists(PK)',
      ExpressionAttributeNames: {
        '#web3SmartContractId': 'web3SmartContractId',
        '#web3Token': 'web3Token',
        '#web3TxHash': 'web3TxHash'
      },
      ExpressionAttributeValues: {
        ':contractId': contractId,
        ':tokenId': tokenId,
        ':txHash': txHash
      }
    })
    .catch((ex) => {
      console.error('[UpdateOrderWeb3Info]', ex.message)
    })
}

/**
 * 上传NFT元数据文件到OBS
 * @param {object} metadata 元数据
 * @param {string} obsKey OBS对象存储的Key
 * @returns {Promise<string>} metadata file hash
 */
async function uploadMetadataFile(metadata, obsKey) {
  const metadataContent = JSON.stringify(metadata, null, 4)

  const obs = new ObsClient({
    access_key_id: process.env.OBS_AK,
    secret_access_key: process.env.OBS_SK,
    server: `https://${WEB3_OBS_ENDPOINT}`
  })

  const result = await obs
    .PutObject({
      Bucket: WEB3_OBS_BUCKET,
      Key: obsKey,
      Body: metadataContent
    })
    .catch(function (err) {
      console.error(err)
    })

  if (result?.CommonMsg && result.CommonMsg.Status < 300) {
    const hash = crypto.createHash('sha256').update(metadataContent, 'utf8').digest('hex')
    return `0x${hash}`
  } else {
    console.error('Failed to upload metadata file.')
    return ''
  }
}
