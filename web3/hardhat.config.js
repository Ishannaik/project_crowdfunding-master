/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.9",
    defaultNetwork: "sepolia", // Changed from goerli to sepolia
    networks: {
      hardhat: {},
      sepolia: {
        // Changed from goerli to sepolia
        url: "https://rpc.ankr.com/eth_sepolia", // Updated the RPC URL for Sepolia
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
