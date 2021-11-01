import { useEffect } from "react";
import getSocials from "../socials/Socials";
import checkIfWalletIsConnected from "../checkWallet/checkWallet";
import connectWallet from "../connectWallet/connectWallet";
import useCheck from "../../hooks/useCheck";
import wave from "../wave/wave";
import getAllWaves from "../getWaves/getWaves";
import abi from "../../utils/WavePortal.json";


const Container = ({ contractAddress }) => {
  const contractABI = abi.abi; // ABI of the contract
  const Account = useCheck(); // Get the account from the provider
  const allWaves = getAllWaves(contractAddress, contractABI); // Get all waves from the contract
  const arrWaves = [];

  // push waves to array
  allWaves.then(res => {
    res.forEach(element => {
      arrWaves.push(element);
    });
  });

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">Hey there welcome to my portal</div>
        <div className="bio">
          I am jonathan and I am a wave engineer. I am currently working at
          Wave.
        </div>
        <button className="generalButton" onClick={wave}>
          Wave at Me
        </button>
        <button className="generalButton" onClick={getSocials}>
          Visit my Github
        </button>
        {!Account && (
          <button className="generalButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
        {arrWaves.map((wave, index) => {
          return (
            <div key={index} style={{ backgroundColor: "OldLace", marginTop: "16px", padding: "8px" }}>
              <div>Address: {wave.address}</div>
              <div>Message: {wave.message}</div>
              <div>Time: {wave.timestamp.toString()}</div>
            </div>)
        })}
      </div>
    </div>
  );
};

export default Container;
