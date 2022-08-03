const main = async () => {
  const waifuContractFactory = await hre.ethers.getContractFactory('WaifuPortal');
  const waifuContract = await waifuContractFactory.deploy();

  await waifuContract.deployed();

  console.log('WaifuPortal address: ', waifuContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  runMain();