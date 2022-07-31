import { useState } from "react";

const useCheck = async (): Promise<string> => {
  const [currentAccount, setCurrentAccount] = useState(""); // set current account
  try {
    // @ts-ignore
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length !== 0) {
      // if the user has an account
      const account = accounts[0];
      setCurrentAccount(account); // set current account
      return currentAccount;
    } else {
      console.log("No authorized account found");
    }
  } catch (error) {
    console.log(error);
  }
};

export default useCheck;