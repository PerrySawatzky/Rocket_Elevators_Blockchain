// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;

contract SolutionManufacturing {

    uint public ElevatorCab = 0;
    uint public Doors = 0;
    uint public Controller = 0;
    uint public Panel = 0;
    uint public Display = 0;
    uint public MusicSystem = 0;
    
    struct Products{
        
        address productId;
        bytes32 commandId;
        uint64 elevatorCab;
        uint64 doors;
        uint64 controller;
        uint64 panel;
        uint64 display;
        uint64 musicSystem;
    }
    uint64 public productListCount = 0;
    
    Products[] productList;
    

}