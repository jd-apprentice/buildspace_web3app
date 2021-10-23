import Wave from "../wave/Wave";
import getSocials from "../socials/Socials";
import GetWallet from "../utils/checkWallet";

const Container = () => {

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">Hey there welcome to my portal</div>

        <div className="bio">
          I am jonathan and I am a wave engineer. I am currently working at
          Wave.
        </div>

        <button className="generalButton" onClick={Wave}>
          Wave at Me
        </button>
        <button className="generalButton" onClick={getSocials}>
          Visit my Github
        </button>
        <GetWallet />
      </div>
    </div>
  );
};

export default Container;
