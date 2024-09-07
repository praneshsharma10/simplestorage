// deploy.js

async function main() {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    console.log("Deploying contract...");
    const simpleStorage = await SimpleStorage.deploy();
    await simpleStorage.deployed();
    console.log("Contract deployed to:", simpleStorage.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  