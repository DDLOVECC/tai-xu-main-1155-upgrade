# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
npx hardhat verify --network sepolia 0x92Cf77A2b6AD4BfCA41565C17eC0787de9D4C257 TaiXuDEX TaiXuNFT
https://sepolia.etherscan.io/address/0x92Cf77A2b6AD4BfCA41565C17eC0787de9D4C257#code

updata contract test 2023.10.19
address 0x5e2cEd5e1CfAeE66bA75Ca28F34E41B814c6c263
npx hardhat verify --network sepolia 0x5e2cEd5e1CfAeE66bA75Ca28F34E41B814c6c263 
https://sepolia.etherscan.io/address/0x6F57940e3356A41Be3334fAd485cFc0fd50936d1#code
====================================================================================
npx hardhat verify --network sepolia 0x5e2cEd5e1CfAeE66bA75Ca28F34E41B814c6c263
Verifying implementation: 0x6F57940e3356A41Be3334fAd485cFc0fd50936d1
Successfully submitted source code for contract
contracts/TaiXuNFTExchange.sol:TaiXuNFTExchange at 0x6F57940e3356A41Be3334fAd485cFc0fd50936d1
for verification on the block explorer. Waiting for verification result...

Successfully verified contract TaiXuNFTExchange on the block explorer.
https://sepolia.etherscan.io/address/0x6F57940e3356A41Be3334fAd485cFc0fd50936d1#code
Verifying proxy: 0x5e2cEd5e1CfAeE66bA75Ca28F34E41B814c6c263
Contract at 0x5e2cEd5e1CfAeE66bA75Ca28F34E41B814c6c263 already verified.
Linking proxy 0x5e2cEd5e1CfAeE66bA75Ca28F34E41B814c6c263 with implementation
Successfully linked proxy to implementation.
Verifying proxy admin: 0xaF4deF651b50740C527E4988c841655FDaf2C76E
Contract at 0xaF4deF651b50740C527E4988c841655FDaf2C76E already verified.
Proxy fully verified.

=================================================================================
【第一次升级：upgrade contract】
npx hardhat run scripts/upgrade.js --network sepolia
npx hardhat verify --network sepolia 0x5Db977e84D865ed845440400
72B8C7Ac9F66e4E6
Successfully submitted source code for contract
contracts/TaiXuNFTExchangeUp.sol:TaiXuNFTExchangeUp at 0x5Db977e84D865ed84544040072B8C7Ac9F66e4E6
for verification on the block explorer. Waiting for verification result...

Successfully verified contract TaiXuNFTExchangeUp on the block explorer.
https://sepolia.etherscan.io/address/0x5Db977e84D865ed84544040072B8C7Ac9F66e4E6#code
=====================================================================================
【第二次升级：upgrade contract】
升级后新合约地址：0x4BA6cB398163A73A98cD26eda493ff45D20b2dF9
【第二次升级发现直接verify代理合约也可以使升级后合约得到verify】
npx hardhat verify --network sepolia 0x5e2cEd5e1CfAeE66bA75Ca28F34E41B814c6c263
Verifying implementation: 0x4BA6cB398163A73A98cD26eda493ff45D20b2dF9
Successfully submitted source code for contract
contracts/TaiXuNFTExchangeUpLogic.sol:TaiXuNFTExchangeUpLogic at 0x4BA6cB398163A73A98cD26eda493ff45D2
0b2dF9
for verification on the block explorer. Waiting for verification result...

Successfully verified contract TaiXuNFTExchangeUpLogic on the block explorer.
https://sepolia.etherscan.io/address/0x4BA6cB398163A73A98cD26eda493ff45D20b2dF9#code
Verifying proxy: 0x5e2cEd5e1CfAeE66bA75Ca28F34E41B814c6c263
Contract at 0x5e2cEd5e1CfAeE66bA75Ca28F34E41B814c6c263 already verified.
Linking proxy 0x5e2cEd5e1CfAeE66bA75Ca28F34E41B814c6c263 with implementation
Successfully linked proxy to implementation.
Verifying proxy admin: 0xaF4deF651b50740C527E4988c841655FDaf2C76E
Contract at 0xaF4deF651b50740C527E4988c841655FDaf2C76E already verified.
Proxy fully verified.
```
