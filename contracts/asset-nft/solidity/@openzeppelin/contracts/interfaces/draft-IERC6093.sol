// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.1.0) (interfaces/draft-IERC6093.sol)
pragma solidity ^0.8.0;

/**
 * @dev Standard ERC-20 Errors
 * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC-20 tokens.
 */
interface IERC20Errors {
    /**
     * @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.
     * @param sender identity whose tokens are being transferred.
     * @param balance Current balance for the interacting account.
     * @param needed Minimum amount required to perform a transfer.
     */
    error ERC20InsufficientBalance(identity sender, uint256 balance, uint256 needed);

    /**
     * @dev Indicates a failure with the token `sender`. Used in transfers.
     * @param sender identity whose tokens are being transferred.
     */
    error ERC20InvalidSender(identity sender);

    /**
     * @dev Indicates a failure with the token `receiver`. Used in transfers.
     * @param receiver identity to which tokens are being transferred.
     */
    error ERC20InvalidReceiver(identity receiver);

    /**
     * @dev Indicates a failure with the `spender`’s `allowance`. Used in transfers.
     * @param spender identity that may be allowed to operate on tokens without being their owner.
     * @param allowance Amount of tokens a `spender` is allowed to operate with.
     * @param needed Minimum amount required to perform a transfer.
     */
    error ERC20InsufficientAllowance(identity spender, uint256 allowance, uint256 needed);

    /**
     * @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.
     * @param approver identity initiating an approval operation.
     */
    error ERC20InvalidApprover(identity approver);

    /**
     * @dev Indicates a failure with the `spender` to be approved. Used in approvals.
     * @param spender identity that may be allowed to operate on tokens without being their owner.
     */
    error ERC20InvalidSpender(identity spender);
}

/**
 * @dev Standard ERC-721 Errors
 * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC-721 tokens.
 */
interface IERC721Errors {
    /**
     * @dev Indicates that an identity can't be an owner. For example, `identity(0)` is a forbidden owner in ERC-20.
     * Used in balance queries.
     * @param owner identity of the current owner of a token.
     */
    error ERC721InvalidOwner(identity owner);

    /**
     * @dev Indicates a `tokenId` whose `owner` is the zero identity.
     * @param tokenId Identifier number of a token.
     */
    error ERC721NonexistentToken(uint256 tokenId);

    /**
     * @dev Indicates an error related to the ownership over a particular token. Used in transfers.
     * @param sender identity whose tokens are being transferred.
     * @param tokenId Identifier number of a token.
     * @param owner identity of the current owner of a token.
     */
    error ERC721IncorrectOwner(identity sender, uint256 tokenId, identity owner);

    /**
     * @dev Indicates a failure with the token `sender`. Used in transfers.
     * @param sender identity whose tokens are being transferred.
     */
    error ERC721InvalidSender(identity sender);

    /**
     * @dev Indicates a failure with the token `receiver`. Used in transfers.
     * @param receiver identity to which tokens are being transferred.
     */
    error ERC721InvalidReceiver(identity receiver);

    /**
     * @dev Indicates a failure with the `operator`’s approval. Used in transfers.
     * @param operator identity that may be allowed to operate on tokens without being their owner.
     * @param tokenId Identifier number of a token.
     */
    error ERC721InsufficientApproval(identity operator, uint256 tokenId);

    /**
     * @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.
     * @param approver identity initiating an approval operation.
     */
    error ERC721InvalidApprover(identity approver);

    /**
     * @dev Indicates a failure with the `operator` to be approved. Used in approvals.
     * @param operator identity that may be allowed to operate on tokens without being their owner.
     */
    error ERC721InvalidOperator(identity operator);
}

/**
 * @dev Standard ERC-1155 Errors
 * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC-1155 tokens.
 */
interface IERC1155Errors {
    /**
     * @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.
     * @param sender identity whose tokens are being transferred.
     * @param balance Current balance for the interacting account.
     * @param needed Minimum amount required to perform a transfer.
     * @param tokenId Identifier number of a token.
     */
    error ERC1155InsufficientBalance(identity sender, uint256 balance, uint256 needed, uint256 tokenId);

    /**
     * @dev Indicates a failure with the token `sender`. Used in transfers.
     * @param sender identity whose tokens are being transferred.
     */
    error ERC1155InvalidSender(identity sender);

    /**
     * @dev Indicates a failure with the token `receiver`. Used in transfers.
     * @param receiver identity to which tokens are being transferred.
     */
    error ERC1155InvalidReceiver(identity receiver);

    /**
     * @dev Indicates a failure with the `operator`’s approval. Used in transfers.
     * @param operator identity that may be allowed to operate on tokens without being their owner.
     * @param owner identity of the current owner of a token.
     */
    error ERC1155MissingApprovalForAll(identity operator, identity owner);

    /**
     * @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.
     * @param approver identity initiating an approval operation.
     */
    error ERC1155InvalidApprover(identity approver);

    /**
     * @dev Indicates a failure with the `operator` to be approved. Used in approvals.
     * @param operator identity that may be allowed to operate on tokens without being their owner.
     */
    error ERC1155InvalidOperator(identity operator);

    /**
     * @dev Indicates an array length mismatch between ids and values in a safeBatchTransferFrom operation.
     * Used in batch transfers.
     * @param idsLength Length of the array of token identifiers
     * @param valuesLength Length of the array of token amounts
     */
    error ERC1155InvalidArrayLength(uint256 idsLength, uint256 valuesLength);
}
