import getAllWaves from "../getWaves/getWaves";
import abi from "../../utils/WavePortal.json";

const checkIfWalletIsConnected = async () => {
  const contractABI = abi.abi;
  // check if wallet is connected
  try {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length !== 0) {
      // if the user has an account
      const account = accounts[0];
      getAllWaves("0x9b131E636E29C96d0836956759c3f7aA0E9381e1", contractABI); // get all waves
      return account;
    } else {
      console.log("No authorized account found");
    }
  } catch (error) {
    console.log(error);
  }
};

export default checkIfWalletIsConnected;
