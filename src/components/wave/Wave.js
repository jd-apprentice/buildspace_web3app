import abi from "../../utils/WavePortal.json";
import { ethers } from "ethers";

const Wave = async (Message) => {
  const contractAddress = "0x9b131E636E29C96d0836956759c3f7aA0E9381e1";
  const contractABI = abi.abi;

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

      let count = await wavePortalContract.getTotalWaves();
      const waveTxn = await wavePortalContract.makeWave(Message);
      await waveTxn.wait();
      console.log("Mined -- ", waveTxn.hash);
      count = await wavePortalContract.getTotalWaves();
      console.log("Retrieved total wave count...", count.toNumber());
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};

export default Wave;