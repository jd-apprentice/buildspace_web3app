// Connect to the contract
const connectWallet = async () => {
  // connect to the wallet
  try {
    const { ethereum } = window;

    if (!ethereum) {
      // if the user is not running metamask
      alert("Get MetaMask!");
      return;
    }

    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    return accounts[0];
  } catch (error) {
    console.log(error);
  }
};

export default connectWallet;
