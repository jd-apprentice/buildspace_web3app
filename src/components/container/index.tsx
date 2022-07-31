import { useEffect, useState } from "react";
import { Footer, InputForm } from "..";
import useCheck from "../../hooks/useCheck";
import { ContainerType } from "../../models";
import {
  checkIfWalletIsConnected,
  connectWallet,
  getAllWaves,
} from "../../utils/index";
import abi from "../../utils/WavePortal.json";

export const Container: React.FC<ContainerType> = ({
  contractAddress,
}: ContainerType): React.ReactElement => {
  const contractABI = abi.abi;
  const Account = useCheck();
  const [allWaves, setAllWaves] = useState([]);
  const [currentAccount, setCurrentAccount] = useState(String);

  useEffect(() => {
    // @ts-ignore
    getAllWaves(contractAddress, contractABI).then((res) => {
      setAllWaves(res);
    });
    Account.then((res) => {
      setCurrentAccount(res);
    });
    checkIfWalletIsConnected();
  }, [contractAddress, contractABI, Account]);

  return (
    <>
      <div className="mainContainer">
        <div className="dataContainer">
          <div className="header">👋 Hey there welcome to my page</div>
          <div className="bio">Right now is underconstruction!</div>
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
      <Footer />
    </>
  );
};

export default Container;
