// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WaifuPortal {
    uint256 totalWaifus;

    event NewWaifu(address indexed from, uint256 timestamp, string image);

    struct Waifu {
        address owner;
        string image;
        uint256 timestamp;
    }

    Waifu[] waifus;

    mapping(address => uint256) public lastCreatedAt;

    constructor() {}

    function makeWaifu(string memory _image) public {
        require(
            lastCreatedAt[msg.sender] + 60 seconds < block.timestamp,
            "Must wait 60 seconds before creating a new Image."
        );

        // Update the current timestamp we have for the user
        lastCreatedAt[msg.sender] = block.timestamp;

        // Waifu Function
        totalWaifus++;
        waifus.push(Waifu(msg.sender, _image, block.timestamp));
        emit NewWaifu(msg.sender, block.timestamp, _image);
    }

    function getAllWaifus() public view returns (Waifu[] memory) {
        return waifus;
    }

    function getTotalWaifus() public view returns (uint256) {
        return totalWaifus;
    }

    function getTotalWaifusByAddress(address _address)
        public
        view
        returns (uint256)
    {
        console.log(_address, "has created ", totalWaifus, " images!");
        return totalWaifus;
    }
}
