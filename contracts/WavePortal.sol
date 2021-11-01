// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    event NewWave(address indexed from, uint256 timestamp, string message);

    struct Wave {
        address waver; // The address of the user who waved.
        string message; // The message the user sent.
        uint256 timestamp; // The timestamp when the user waved.
    }

    Wave[] waves;

    constructor() {
        console.log("Iniciando smart contract");
    }

    function makeWave(string memory _message) public {
        totalWaves++;
        console.log("%s has waved!", msg.sender);
        waves.push(
            Wave({
                waver: msg.sender,
                timestamp: block.timestamp,
                message: _message
            })
        );
        emit NewWave(msg.sender, block.timestamp, _message);
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    function getTotalWavesByAddress(address _address)
        public
        view
        returns (uint256)
    {
        console.log("%s has waved %d times!", _address, totalWaves);
        return totalWaves;
    }
}
