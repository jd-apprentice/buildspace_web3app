import { ethers } from "ethers";

export const getAllWaves = async (contractAddress: string, contractABI: string) => {
  let allWaves = [];
  try {
    // @ts-ignore
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

      let wavesCleaned: any[] = [];
      waves.forEach((wave: { waver: any; timestamp: number; message: any; }) => {
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
