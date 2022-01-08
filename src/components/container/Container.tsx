import { useEffect } from "react";
import { fetchWaifus } from "../../services/fetch";
import getSocials from "../socials/Socials";
import checkIfWalletIsConnected from "../checkWallet/checkWallet";
import WaveButton from "../wave/WaveButton";

const Container = () => {
  // const contractABI = abi.abi;
  // const Account = useCheck();
  // const [allWaves, setAllWaves] = useState([]);
  // const [currentAccount, setCurrentAccount] = useState(String);
  const waifus = fetchWaifus();

  useEffect(() => {
    // getAllWaves(contractAddress, contractABI).then((res) => {
      // setAllWaves(res);
    // Account.then((res) => {
      // setCurrentAccount(res);
    waifus.then((res: any) => {
      console.log(res.images[0].url);
    });
    checkIfWalletIsConnected();
  }, [waifus]);

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">👋 Hey there welcome to my page</div>
        <div className="bio">
          Right now is underconstruction!
        </div>
        <button className="generalButton" onClick={WaveButton}>
          Wave at Me
        </button>
        <button className="generalButton" onClick={getSocials}>
          Visit my Github
        </button>
        {/* {!Account && (
          <button className="generalButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )} */}
        {/* <InputForm wallet={currentAccount} /> */}
      </div>
    </div>
  );
};

export default Container;
