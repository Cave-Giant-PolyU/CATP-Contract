import { SolContract } from '@antchain/jssdk'

import { ABI_MBA } from './abi/abi-meta-bridge-asset.mjs'
import { Web3Provider } from './provider/web3-provider.mjs'

export function mintAsset({ to, tokenId, tokenURI, tokenHash, assetHash }) {
  const contract = new SolContract(
    { contractName: process.env.ASSET_CONTRACT_NAME, abi: ABI_MBA },
    Web3Provider.getAssetMgrAccount()
  )

  return contract
    .call({
      methodName: 'mint',
      args: [to, tokenId, tokenURI, tokenHash, assetHash],
      gas: 1000000
    })
    .then((result) => {
      console.log(`CallContract ${process.env.ASSET_CONTRACT_NAME} | txHash: `, result?.txHash)
      if (result?.txHash) {
        return result
      }
      return null
    })
    .catch((err) => {
      console.error('CallContract', err)
      return null
    })
}
