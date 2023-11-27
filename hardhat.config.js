require("@nomicfoundation/hardhat-toolbox")

module.exports = {
  solidity: {
    version: "0.8.21",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/040153c0048b43b190d3ee87e7ede59b",
      accounts: [
        "0513d443d9ba9f9db2ef69df02a101e1c1152dd63afdbde3ff8ac4fca0b778f2",
      ],
    },
  },
}
