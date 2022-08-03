declare var window: { ethereum: any };
import abi from "../../utils/WaifuPortal.json";
import { ethers } from "ethers";
import { contractAddress } from "../../const";

export const Waifu = async (Image: string) => {
  const contractABI = abi.abi;

  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const waifuPortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      let count = await waifuPortalContract.getTotalWaifus();
      const waifuTxn = await waifuPortalContract.makeWaifu(Image, {
        gasLimit: 300000,
      });
      await waifuTxn.wait();
      console.log("Mined -- ", waifuTxn.hash);
      count = await waifuPortalContract.getTotalWaifus();
      console.log("Retrieved total waifu count...", count.toNumber());
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};
