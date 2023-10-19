const {ethers, upgrades} = require("hardhat");

async function main() {
    const address = "0x5e2cEd5e1CfAeE66bA75Ca28F34E41B814c6c263";//代理合约地址
    // const TaiXuNFTExchangeUp = await ethers.getContractFactory("TaiXuNFTExchangeUp");
    // const taiXuNFTExchangeUp = await upgrades.upgradeProxy(address, TaiXuNFTExchangeUp);
    // await taiXuNFTExchangeUp.waitForDeployment();
    // console.log("TaiXuNFTExchangeUp address:", await taiXuNFTExchangeUp.getAddress());

    const TaiXuNFTExchangeUpLogic = await ethers.getContractFactory("TaiXuNFTExchangeUpLogic");
    const taiXuNFTExchangeUpLogic = await upgrades.upgradeProxy(address, TaiXuNFTExchangeUpLogic);
    console.log("TaiXuNFTExchangeUpLogic address:", await taiXuNFTExchangeUpLogic.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
