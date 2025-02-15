// 配置说明请参考 https://opendocs.antchain.antgroup.com/myfish/myfish-config
module.exports = {
  gasLimit: 5000000,
  contract: {
    type: 'solidity',
    // name: 'meta_bridge_asset_alpha_v01',
    name: 'lz_test_nft_v11',
    version: 1
  },
  rest: {
    bizid: 'a00e36c5', // 链的 ID，这里默认是实验链的 ID
    restUrl: 'https://rest.baas.alipay.com',
    accessId: '',
    accessSecret: './certs/access.key',

    // account: 'meta-bridge-system-alpha',
    // kmsId: '',
    // tenantId: ''

    account: 'meta-bridge-system-alpha1',
    accountPrivateKey: './certs/user.key',
    accountPrivateKeyPassword: ''
  }
}
