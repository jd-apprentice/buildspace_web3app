import { ethers } from "ethers";

const getAllWaves = async (contractAddress, contractABI) => {
  let allWaves = [];
  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const wavePortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      const waves = await wavePortalContract.getAllWaves();

      let wavesCleaned = [];
      waves.forEach((wave) => {
        wavesCleaned.push({
          address: wave.waver,
          timestamp: new Date(wave.timestamp * 1000),
          message: wave.message,
        });
      });

      allWaves = wavesCleaned;
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
  return allWaves;
};

export default getAllWaves;
