import { useState, useEffect } from "react";

const GetWallet = () => {
  const [currentAccount, setCurrentAccount] = useState(""); // set current account

  const displayAccount = () => {
    // display the current account
    alert(`this is the wallet you connected! ${currentAccount}`);
  };

  const checkIfWalletIsConnected = async () => {
    // check if wallet is connected
    try {
      const { ethereum } = window;
      if (!ethereum) {
        // if the user is not running metamask
        console.log("Make sure you have metamask!");
        return;
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        // if the user has an account
        const account = accounts[0];
        console.log("Connected:", account); // log the account
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]); 
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  // Render one button or another depending on the state
  if (!currentAccount) {
    return (
      <button className="generalButton" onClick={connectWallet}>
        Connect Wallet
      </button>
    );
  } else {
    return (
      <>
        <button className="generalButton" onClick={displayAccount}>
          Check Wallet
        </button>
      </>
    );
  }
};

export default GetWallet;
