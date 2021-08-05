// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./ERC721.sol";

contract MaterialProvider is ERC721 {

    string[] public materials;
    mapping(uint64 => MaterialsStruct) MaterialsStructs;
    uint64 public materialCount;

    uint64 public aluminumBars = 5;
    uint64 public stainlessSteelSheets = 10;
    uint64 public hardware = 9;
    uint64 public rubberBands = 6;
    uint64 public lightBulbs = 3;
    uint64 public displayLEDs = 17;

    struct MaterialsStruct {
        uint64 stainlessSteelSheets;
        uint64 hardware;
        uint64 rubberBands;
        uint64 lightBulbs;
        uint64 displayLEDs;
    }

    constructor() ERC721("MaterialProvider", "MATERIALPROVIDER") public {
    }

    function mint(string memory _material, uint64 aluminumBars, uint64 stainlessSteelSheets, uint64 hardware, uint64 rubberBands, uint64 lightBulbs, uint64 displayLEDs) public returns (uint64, uint64, uint64, uint64, uint64, uint64) {
        materials.push(_material);
        uint _id = materials.length;
        _mint(msg.sender, _id);
    }

    function getCountaluminumBars() view public returns (uint64) {
        return aluminumBars;
    }
    
    function getCountstainlessSteelSheets() view public returns (uint64) {
        return stainlessSteelSheets;
    }
    
    function getCountHardware() view public returns (uint64) {
        return hardware;
    }
    
    function getCountRubberBands() view public returns (uint64) {
        return rubberBands;
    }
    
    function getCountlightBulbs() view public returns (uint64) {
        return lightBulbs;
    }
    
    function getCountDisplayLEDs() view public returns (uint64) {
        return displayLEDs;
    }

    function getContractAddress()public view returns(address){
        return address(this);
    }
}