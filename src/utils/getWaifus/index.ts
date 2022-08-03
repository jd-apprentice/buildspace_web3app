declare var window: { ethereum: any };
import { ethers } from "ethers";
import { WaifuType } from "../../models";

/**
 * @description function to return all the waifus from the contract
 * @param contractAddress - The contract address
 * @param contractABI - The contract ABI
 * @returns WaifuType[] - All waifus from the contract
 */

export const getAllWaifus = async (
  contractAddress: string,
  contractABI: string
): Promise<WaifuType[]> => {
  let allWaifus = [];
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

      const waifus = await waifuPortalContract.getAllWaifus();

      let waifusCleaned: WaifuType[] = [];
      waifus.forEach(
        (waifu: { owner: string; timestamp: number; image: string }) => {
          waifusCleaned.push({
            owner: waifu.owner,
            timestamp: new Date(waifu.timestamp * 1000),
            image: waifu.image,
          });
        }
      );

      allWaifus = waifusCleaned;
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
  return allWaifus;
};
