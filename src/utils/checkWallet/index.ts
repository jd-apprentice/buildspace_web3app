declare var window: { ethereum: any; }

export const checkIfWalletIsConnected = async () => {
  // const contractABI = abi as unknown as Abi;
  // check if wallet is connected
  try {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length !== 0) {
      // if the user has an account
      const account = accounts[0];
      return account;
    } else {
      console.log("No authorized account found");
    }
  } catch (error) {
    console.log(error);
  }
};
