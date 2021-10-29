import { ethers } from "ethers";
import abi from "../../utils/WavePortal.json"

const Wave = async () => {

    const contractAddress = "0x3b7cF25Ed73a4d4d285196DDe2201f8E5633b0c6"; // contract address
    const contractABI = abi.abi; // contract abi

    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        let count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());

        const waveTxn = await wavePortalContract.makeWave(); // send a wave
        console.log("Mining...", waveTxn.hash); // txn hash

        await waveTxn.wait();
        console.log("Mined -- ", waveTxn.hash); // txn hash logged

        count = await wavePortalContract.getTotalWaves(); // get total waves
        console.log("Retrieved total wave count...", count.toNumber());
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  };

export default Wave;