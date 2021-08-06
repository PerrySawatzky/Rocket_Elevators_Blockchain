// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./ERC721.sol";

contract ProjectOffice is ERC721 {
    string[] public projects;
    mapping(uint => ComponentStruct) componentStructs;
    uint public orderCount;

    uint256 public Controllers = 1;
    uint256 public Shafts = 1;
    uint256 public Doors = 1;
    uint256 public Buttons = 1;
    uint256 public Displays = 1;
    uint256 public Speakers = 1;

   // List of components
    struct ComponentStruct {
        uint256 amountOfShafts;
        uint256 amountOfControllers;
        uint256 amountOfDoors;
        uint256 amountOfButtons;
        uint256 amountOfDisplays;
        uint256 amountOfSpeakers;
    }
    constructor() ERC721("ProjectOffice", "PROJECT") public {
    }
    // function newOrder (uint batteries, uint columns, uint elevators, uint floors) public returns(uint,uint,uint,uint,uint,uint)
    function orders(string memory _project, uint batteries, uint columns, uint elevators, uint floors) public returns(uint,uint,uint,uint,uint,uint) {
        projects.push(_project);
        uint _id = projects.length;
        _mint(msg.sender, _id);


        uint totalColumns = columns * batteries;
        uint totalElevators = elevators*totalColumns;
        uint id = orderCount++;

        componentStructs[id].amountOfShafts = totalElevators;        
        componentStructs[id].amountOfControllers = batteries;
        componentStructs[id].amountOfDoors = totalElevators*2;
        componentStructs[id].amountOfButtons = floors*totalElevators;
        componentStructs[id].amountOfDisplays = floors+totalElevators;
        componentStructs[id].amountOfSpeakers = (totalElevators*2)+floors;

        Shafts = componentStructs[id].amountOfShafts;
        Controllers = componentStructs[id].amountOfControllers;
        Doors = componentStructs[id].amountOfDoors;
        Buttons = componentStructs[id].amountOfButtons;
        Displays = componentStructs[id].amountOfDisplays;
        Speakers = componentStructs[id].amountOfSpeakers;

        return (componentStructs[id].amountOfShafts,componentStructs[id].amountOfControllers,componentStructs[id].amountOfDoors,componentStructs[id].amountOfButtons,componentStructs[id].amountOfDisplays,componentStructs[id].amountOfSpeakers);
        

    }

    function getContractAddress()public view returns(address){
        return address(this);
    }
    
}