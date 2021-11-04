import { useEffect, useState } from "react";
import getSocials from "../socials/Socials";
import checkIfWalletIsConnected from "../checkWallet/checkWallet";
import connectWallet from "../connectWallet/connectWallet";
import useCheck from "../../hooks/useCheck";
import getAllWaves from "../getWaves/getWaves";
import abi from "../../utils/WavePortal.json";
import InputForm from "../inputForm/InputForm";

const Container = ({ contractAddress }) => {
  const contractABI = abi.abi;
  const Account = useCheck();
  const [allWaves, setAllWaves] = useState([]);
  const [currentAccount, setCurrentAccount] = useState(null);

  useEffect(() => {
    getAllWaves(contractAddress, contractABI).then((res) => {
      setAllWaves(res);
    });
    Account.then((res) => {
      setCurrentAccount(res);
    });
    checkIfWalletIsConnected();
  }, [contractAddress, contractABI, Account]);

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">👋 Hey there welcome to my portal</div>
        <div className="bio">
          I am Jonathan and I am a wave engineer. I am currently working at
          Wave.
        </div>
        <button className="generalButton" onClick={getSocials}>
          Visit my Github
        </button>
        {!Account && (
          <button className="generalButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
        <InputForm wallet={currentAccount} />
        {allWaves.map((wave, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: "OldLace",
                marginTop: "16px",
                padding: "8px",
              }}
            >
              <div>Address: {wave.address}</div>
              <div>Message: {wave.message}</div>
              <div>Time: {wave.timestamp.toString()}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
