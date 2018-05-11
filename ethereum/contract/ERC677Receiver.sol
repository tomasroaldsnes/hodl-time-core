pragma solidity ^0.4.23;

contract ERC677Receiver{ 
    function transferAndCall(address _recipient, uint256 _value) public;
}