import { useState } from "react";

const useConnect = async () => {
  const [currentAccount, setCurrentAccount] = useState("");
  // connect to the wallet
  try {
    // @ts-ignore
    const { ethereum } = window;

    if (!ethereum) {
      // if the user is not running metamask
      alert("Get MetaMask!");
      return;
    }

    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    setCurrentAccount(accounts[0]);
    return currentAccount;
  } catch (error) {
    console.log(error);
  }
};

export default useConnect;
