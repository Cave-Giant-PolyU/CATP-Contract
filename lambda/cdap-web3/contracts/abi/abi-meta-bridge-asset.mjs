export const ABI_MBA = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [
      {
        internalType: 'identity',
        name: 'sender',
        type: 'identity'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      },
      {
        internalType: 'identity',
        name: 'owner',
        type: 'identity'
      }
    ],
    name: 'ERC721IncorrectOwner',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'identity',
        name: 'operator',
        type: 'identity'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'ERC721InsufficientApproval',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'identity',
        name: 'approver',
        type: 'identity'
      }
    ],
    name: 'ERC721InvalidApprover',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'identity',
        name: 'operator',
        type: 'identity'
      }
    ],
    name: 'ERC721InvalidOperator',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'identity',
        name: 'owner',
        type: 'identity'
      }
    ],
    name: 'ERC721InvalidOwner',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'identity',
        name: 'receiver',
        type: 'identity'
      }
    ],
    name: 'ERC721InvalidReceiver',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'identity',
        name: 'sender',
        type: 'identity'
      }
    ],
    name: 'ERC721InvalidSender',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'ERC721NonexistentToken',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'identity',
        name: 'owner',
        type: 'identity'
      }
    ],
    name: 'OwnableInvalidOwner',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'identity',
        name: 'account',
        type: 'identity'
      }
    ],
    name: 'OwnableUnauthorizedAccount',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'length',
        type: 'uint256'
      }
    ],
    name: 'StringsInsufficientHexLength',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'identity',
        name: 'owner',
        type: 'identity'
      },
      {
        indexed: true,
        internalType: 'identity',
        name: 'approved',
        type: 'identity'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'Approval',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'identity',
        name: 'owner',
        type: 'identity'
      },
      {
        indexed: true,
        internalType: 'identity',
        name: 'operator',
        type: 'identity'
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool'
      }
    ],
    name: 'ApprovalForAll',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_fromTokenId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_toTokenId',
        type: 'uint256'
      }
    ],
    name: 'BatchMetadataUpdate',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'identity',
        name: 'owner',
        type: 'identity'
      },
      {
        indexed: true,
        internalType: 'string',
        name: 'tokenURI',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenHash',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'assetHash',
        type: 'uint128'
      }
    ],
    name: 'IssueCertificate',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256'
      }
    ],
    name: 'MetadataUpdate',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'identity',
        name: 'previousOwner',
        type: 'identity'
      },
      {
        indexed: true,
        internalType: 'identity',
        name: 'newOwner',
        type: 'identity'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'identity',
        name: 'from',
        type: 'identity'
      },
      {
        indexed: true,
        internalType: 'identity',
        name: 'to',
        type: 'identity'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'Transfer',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'identity',
        name: 'to',
        type: 'identity'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'identity',
        name: 'owner',
        type: 'identity'
      }
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'identity',
        name: '',
        type: 'identity'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'identity',
        name: 'owner',
        type: 'identity'
      },
      {
        internalType: 'identity',
        name: 'operator',
        type: 'identity'
      }
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'identity',
        name: 'to',
        type: 'identity'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      },
      {
        internalType: 'string',
        name: '_tokenUri',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: '_tokenHash',
        type: 'uint256'
      },
      {
        internalType: 'uint128',
        name: '_assetHash',
        type: 'uint128'
      }
    ],
    name: 'mint',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'identity',
        name: '',
        type: 'identity'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'identity',
        name: '',
        type: 'identity'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'identity',
        name: 'from',
        type: 'identity'
      },
      {
        internalType: 'identity',
        name: 'to',
        type: 'identity'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      }
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'identity',
        name: 'from',
        type: 'identity'
      },
      {
        internalType: 'identity',
        name: 'to',
        type: 'identity'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'identity',
        name: 'operator',
        type: 'identity'
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool'
      }
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'baseTokenURI',
        type: 'string'
      }
    ],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4'
      }
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'tokenHash',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'identity',
        name: 'from',
        type: 'identity'
      },
      {
        internalType: 'identity',
        name: 'to',
        type: 'identity'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'identity',
        name: 'newOwner',
        type: 'identity'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]
