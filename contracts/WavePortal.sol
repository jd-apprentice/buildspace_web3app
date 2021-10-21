// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    constructor() {
        console.log("Iniciando smart contract");
    }

    function makeWave() public {
        totalWaves++;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    function getTotalWavesByAddress(address _address) public view returns (uint256) {
        console.log("%s has waved %d times!", _address, totalWaves);
        return totalWaves;
    }
}