/**
 * @type import('hardhat/config').HardhatUserConfig
*/

require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const { ACCOUNT, URL } = process.env;


module.exports = {
  solidity: '0.8.4',
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: URL,
      accounts: [ACCOUNT],
    },
  },
};
