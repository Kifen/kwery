// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Manager is Ownable {
    mapping(address => bool) public whitelists;

    event NewWhitelist(address indexed nftAddress);
    event RemoveFromWhitelist(address indexed nftAddress);

    function addToWhitelist(IERC721 _nft) external onlyOwner {
        address nft = address(_nft);
        whitelists[nft] = true;

        emit NewWhitelist(nft);
    }

    function removeFromWhitelist(IERC721 _nft) external onlyOwner {
        address nft = address(_nft);
        whitelists[nft] = false;

        emit RemoveFromWhitelist(nft);
    }
}
