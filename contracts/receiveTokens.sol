// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/// @title ReceiveSender - A contract to receive and send ERC20 tokens
contract ReceiveSender {
    address public owner;
    IERC20 immutable public busdToken;

    // Error to be raised when someone sends Ether to the contract
    error EthNotAllowed(uint256 value);

    // Modifier to restrict access to the owner of the contract
    modifier onlyOwner {
        require(msg.sender == owner, "Unauthorized");
        _;
    }

    /// @dev Constructor to set the owner and ERC20 token contract address
    /// @param _busd The address of the ERC20 token contract
    constructor(IERC20 _busd) {
        owner = msg.sender;
        busdToken = _busd;
    }

    /// @dev Fallback function to reject any Ether sent to the contract
    receive() external payable {
        revert EthNotAllowed(msg.value);
    }

    /// @dev Function to withdraw ERC20 tokens from the contract to a specified recipient
    /// @param amount The amount of ERC20 tokens to withdraw
    /// @param recipient The address of the recipient
    function withdrawBusd(uint256 amount, address recipient) external onlyOwner {
        require(busdToken.balanceOf(address(this)) >= amount, "Insufficient funds");
        require(recipient != address(0), "Zero address");

        bool success = busdToken.transfer(recipient, amount);
        require(success, "Transfer failed");
    }

    /// @dev Function to withdraw any ERC20 token from the contract to a specified recipient
    /// @param _token The address of the ERC20 token contract to withdraw from
    /// @param recipient The address of the recipient
    /// @param amount The amount of ERC20 tokens to withdraw
    function withdrawErc20Token(IERC20 _token, address recipient, uint256 amount) external onlyOwner {
        require(_token.balanceOf(address(this)) >= amount, "Insufficient funds");
        require(recipient != address(0), "Zero address");

        bool success = _token.transfer(recipient, amount);
        require(success, "Transfer failed");
    }
}
