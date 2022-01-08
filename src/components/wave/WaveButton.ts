import abi from "../../utils/WavePortal.json";
import { ethers } from "ethers";

const WaveButton = async () => {
  const contractAddress = "0xC32F206C48E0b79A912a9AA5DF5B5a94075F19e1";
  const contractABI = abi.abi;

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

      let count = await wavePortalContract.getTotalWaves();
      const waveTxn = await wavePortalContract.makeWave("Saludos para vos tambien!", { gasLimit: 300000 });
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

export default WaveButton;