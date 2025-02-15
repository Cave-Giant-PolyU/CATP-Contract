// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Strings.sol';
import './IAssetIssue.sol';

contract MetaBridgeAssetContract is ERC721, ERC721URIStorage, Ownable, IAssetIssue {
  mapping(uint256 => uint256) private _tokenHashs;
  string private _baseTokenURI = '';

  constructor() ERC721('MetaBridgeAsset', 'MBA') Ownable(_msgSender()) {}

  function mint(
    identity to,
    uint256 tokenId,
    string memory _tokenUri,
    uint256 _tokenHash,
    uint256 _assetHash
  ) external override onlyOwner returns (string memory) {
    _mint(to, tokenId);
    _setTokenURI(tokenId, _tokenUri);
    _setTokenHash(tokenId, _tokenHash);

    string memory _fullTokenUri = tokenURI(tokenId);
    emit IssueCertificate(tokenId, to, _fullTokenUri, _tokenHash, _assetHash);

    return
      string(
        abi.encodePacked(
          '{"tokenId":',
          Strings.toHexString(tokenId),
          ',"owner":"',
          Strings.toHexString(to),
          '","tokenUri":"',
          _fullTokenUri,
          '","tokenHash":',
          Strings.toHexString(_tokenHash),
          ',"assetHash":',
          Strings.toHexString(_assetHash),
          '}'
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
