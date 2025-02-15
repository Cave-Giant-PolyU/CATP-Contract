const { compile } = require('@antchain/mysolidity');

compile({
  contractEntryPath: './solidity/index.sol',
  targetPath: './dist',
  targetName: 'index',
  debug: true,
  solcConfig: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
});
