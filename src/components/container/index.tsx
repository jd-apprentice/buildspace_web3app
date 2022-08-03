import { useEffect, useState } from "react";
import { Footer, InputForm } from "..";
import useCheck from "../../hooks/useCheck";
import { ContainerType } from "../../models";
import {
  checkIfWalletIsConnected,
  connectWallet,
  getAllWaifus,
} from "../../utils/index";
import abi from "../../utils/WaifuPortal.json";

export const Container: React.FC<ContainerType> = ({
  contractAddress,
}: ContainerType): React.ReactElement => {
  const contractABI = abi.abi;
  const Account = useCheck();
  const [allWaifus, setAllWaifus] = useState([]);
  const [currentAccount, setCurrentAccount] = useState(String);

  useEffect(() => {
    // @ts-ignore
    getAllWaifus(contractAddress, contractABI).then((res) => {
      setAllWaifus(res);
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
          {allWaifus.map((waifu, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "OldLace",
                  marginTop: "16px",
                  padding: "8px",
                }}
              >
                <div>Address: {waifu.owner}</div>
                <div>Time: {waifu.timestamp.toString()}</div>
                <div style={{ textAlign: "center" }}>
                  <img width={400} height={400} src={waifu.image} />
                </div>
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
