import { Web3Provider } from './provider/web3-provider.mjs'
import { createHash } from 'crypto'

export function createAccount(accountName) {
  const provider = Web3Provider.getUserMgrAccount()
  return provider.createAccountWithKms({ newAccountName: accountName }).catch((err) => {
    console.error('createAccount', err)
    return null
  })
}

export function getAccountAddr(caveId) {
  if (!caveId) {
    return ''
  }

  const fullName = `cg_${caveId}`
  const hash = createHash('sha256').update(fullName).digest('hex')
  return `0x${hash}`
}
