// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ProjectOffice {
    Project proj;
    struct Project {
        uint64 elevator_shafts;
        uint64 controllers;
        uint64 buttons;
        uint64 doors;
        uint64 displays;
    }

    //Calcul material base on input component
    function set(
        uint64 batteries,
        uint64 columns,
        uint64 elevators,
        uint64 floors
    ) public returns (Project memory) {
        proj.elevator_shafts = elevators;
        proj.controllers = batteries;
        proj.buttons = (floors * (floors - 1) * columns);
        proj.doors = (elevators * floors * columns);
        proj.displays = elevators;
        return proj;
    }

    //Retrieving the valuee
    function retrive() public view returns (Project memory) {
        return proj;
    }
}