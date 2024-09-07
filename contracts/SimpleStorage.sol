
pragma solidity ^0.8.0;

contract SimpleStorage {

    uint256 public storedNumber;

    function set(uint256 _number) public {
        storedNumber = _number;
    }

    function get() public view returns (uint256) {
        return storedNumber;
    }
}
