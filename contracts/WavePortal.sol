// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    uint256 private seed;

    event NewWave(address indexed from, uint256 timestamp, string message);

    struct Wave {
        address waver; // The address of the user who waved.
        string message; // The message the user sent.
        uint256 timestamp; // The timestamp when the user waved.
    }

    Wave[] waves;

    mapping(address => uint256) public lastWavedAt;

    constructor() payable {
        console.log("Iniciando smart contract");
        seed = (block.timestamp + block.difficulty) % 100;
    }

    function makeWave(string memory _message) public {
        // We need to make sure the current timestamp is at least 15-minutes bigger than the last timestamp we stored
        require(lastWavedAt[msg.sender] + 60 seconds < block.timestamp, "Must wait 60 seconds before waving again.");

        // Update the current timestamp we have for the user
        lastWavedAt[msg.sender] = block.timestamp;

        // Wave Function
        totalWaves++;
        console.log("%s has waved!", msg.sender);

        waves.push(Wave(msg.sender, _message, block.timestamp));
        seed = (block.difficulty + block.timestamp + seed) % 100; // Generate a new seed

        // Chances of winning
        if (seed <= 50) {
            console.log("%s won!", msg.sender);
            uint256 prizeAmount = 0.0001 ether;
            require(
                prizeAmount <= address(this).balance,
                "Trying to withdraw more money than the contract has."
            );
            (bool success, ) = (msg.sender).call{value: prizeAmount}("");
            require(success, "Failed to withdraw money from contract.");
        }
        emit NewWave(msg.sender, block.timestamp, _message); // Emit the wave
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
