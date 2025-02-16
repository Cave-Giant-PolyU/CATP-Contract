import { LocalCryptoRestProvider, CloudCryptoRestProvider } from '@antchain/jssdk'

const BLOCK_CHAIN_REST_BASE_URL = 'https://rest.baas.alipay.com'

export const Web3Provider = {
  getAssetMgrAccount: () => {
    return new LocalCryptoRestProvider({
      bizid: process.env.BIZID,
      restUrl: BLOCK_CHAIN_REST_BASE_URL,
      accessId: process.env.BIZ_ACCESS_ID,
      accessSecret: process.env.BIZ_ACCESS_SECRET?.replace(/\\n/g, '\n'),
      account: process.env.CONTRACT_MGR_NAME,
      accountPrivateKey: process.env.CONTRACT_MGR_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      accountPrivateKeyPassword: process.env.CONTRACT_MGR_PRIVATE_KEY_PASSWORD
    })
  }
}
