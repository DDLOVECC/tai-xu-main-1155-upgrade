//const hre = require("hardhat");
const {ethers, upgrades} = require("hardhat");

async function main() {
    const name = "TaiXuDEX";
    const symbol = "TaiXuNFT";
    // const taiXuNFTExchange = await hre.ethers.deployContract("TaiXuNFTExchange", [name, symbol]);
    const TaiXuNFTExchange = await ethers.getContractFactory("TaiXuNFTExchange");
    const taiXuNFTExchange = await upgrades.deployProxy(TaiXuNFTExchange, [name, symbol]);
    await taiXuNFTExchange.waitForDeployment();
    console.log("TaiXuNFTExchange address:", await taiXuNFTExchange.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
