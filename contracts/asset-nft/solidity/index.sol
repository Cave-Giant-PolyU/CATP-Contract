// SPDX-License-Identifier: MIT
// MetaBridge Contracts
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Strings.sol';
import './IAssetIssue.sol';

contract MetaBridgeAssetContract is ERC721, ERC721URIStorage, Ownable, IAssetIssue {
  using Strings for uint256;
  using Strings for uint128;

  mapping(uint256 => uint256) private _tokenHashs;
  string private _baseTokenURI = '';

  constructor() ERC721('MetaBridgeAsset', 'MBA') Ownable(_msgSender()) {}

  /**
   * @dev Mint a nft to `to` by manager.
   *
   * Emits {IssueCertificate}.
   */
  function mint(
    identity to,
    uint256 tokenId,
    string memory tokenUri,
    uint256 assetTokenHash,
    uint128 assetHash
  ) external override onlyOwner returns (string memory) {
    _mint(to, tokenId);
    _setTokenURI(tokenId, tokenUri);
    _setTokenHash(tokenId, assetTokenHash);

    string memory _fullTokenUri = tokenURI(tokenId);
    emit IssueCertificate(tokenId, to, _fullTokenUri, assetTokenHash, assetHash);

    identity contractId = identity(this);
    return
      string(
        abi.encodePacked(
          '{"tokenId":"',
          Strings.toHexString(tokenId),
          '","owner":"',
          Strings.toHexString(to),
          '","contractId":"',
          Strings.toHexString(contractId),
          '","tokenUri":"',
          _fullTokenUri,
          '","tokenHash":"',
          Strings.toHexString(assetTokenHash),
          '","assetHash":"',
          Strings.toHexString(assetHash),
          '"}'
        )
      );
  }

  function tokenHash(uint256 tokenId) external view returns (uint256) {
    _requireOwned(tokenId);
    return _tokenHashs[tokenId];
  }

  function setBaseURI(string memory baseTokenURI) external onlyOwner {
    _baseTokenURI = baseTokenURI;
  }

  function _baseURI() internal view override returns (string memory) {
    return _baseTokenURI;
  }

  function _setTokenHash(uint256 _tokenId, uint256 _tokenHash) internal virtual {
    _tokenHashs[_tokenId] = _tokenHash;
  }

  // The following functions are overrides required by Solidity.
  function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
    return super.tokenURI(tokenId);
  }

  function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
    return super.supportsInterface(interfaceId);
  }
}
