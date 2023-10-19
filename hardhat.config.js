require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require('@openzeppelin/hardhat-upgrades');
const { API_URL, PRIVATE_KEY ,API_KEY} = process.env
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: API_URL,
      accounts: [`${PRIVATE_KEY}`],
    }
  },
  etherscan: {
    apiKey: API_KEY
  }
};
