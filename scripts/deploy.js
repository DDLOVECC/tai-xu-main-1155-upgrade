const hre = require("hardhat");

async function main() {
    const name = "TaiXuDEX";
    const symbol = "TaiXuNFT";
    const taiXuNFTExchange = await hre.ethers.deployContract("TaiXuNFTExchange", [name, symbol]);
    console.log("TaiXuNFTExchange address:", await taiXuNFTExchange.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
