// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IAssetIssue {
  /**
   * @dev Emitted when issue asset.
   */
  event IssueCertificate(
    uint256 indexed tokenId,
    identity indexed owner,
    string indexed tokenURI,
    uint256 tokenHash,
    uint128 assetHash
  );

  function mint(
    identity to,
    uint256 tokenId,
    string memory _tokenUri,
    uint256 _tokenHash,
    uint128 _assetHash
  ) external returns (string memory);
}
