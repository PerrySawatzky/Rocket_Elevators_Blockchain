 const HDWalletProvider = require('@truffle/hdwallet-provider');
 //
 const fs = require('fs');
 const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    // development: {
    //   host: "127.0.0.1",
    //   port: 7545,
    //   network_id: "*"
    // },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/68f81779a3ab4b039df188228b003c44`),
      network_id: 3, 
    },
    develop: {
      port: 8545
    }
  },
  compilers: {
    solc: {
      version: "0.8.0",
        optimizer: {
          enabled: true,
          runs:200
        }
    }
  }
}

