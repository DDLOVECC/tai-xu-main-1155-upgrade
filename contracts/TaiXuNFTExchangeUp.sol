// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/extensions/ERC1155BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./TaiXuNFTExchange.sol";

contract TaiXuNFTExchangeUp is TaiXuNFTExchange {
    uint256 public a;
    function add(uint256 x) public {
        a = a + x;
    }
}

