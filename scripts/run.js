const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
  
    let waveCount;
    let waveByAddress;
    waveCount = await waveContract.getTotalWaves();
  
    let waveTxn = await waveContract.makeWave();
    await waveTxn.wait();
  
    waveCount = await waveContract.getTotalWaves();
    waveTxn = await waveContract.connect(randomPerson).makeWave();
    await waveTxn.wait();
  
    waveCount = await waveContract.getTotalWaves();
    waveByAddress = await waveContract.getWavesByAddress(owner.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();