<<<<<<< HEAD
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract MaterialProvider is ERC721 {

    constructor() ERC721("MaterialProvider", "MP") {
    }

    uint public aluminiumBars = 0;
    uint public stainlessSteelSheets = 0;
    uint public hardware = 0;
    uint public rubberBands = 0;
    uint public lightBulbs = 0;
    uint public displayLeds = 0;

    struct Materials{
        uint aluminiumBars;
        uint stainlessSteelSheets;
        uint hardware;
        uint rubberBands;
        uint lighBulbs;
        uint displayLeds;
    }

    uint public materialListCount;

    mapping(uint => Materials) public materials;
    Materials[] materialList;

    function createMaterials(uint amountOfShafts, uint amountOfControllers, uint amountOfDoors, uint amountOfButtons, uint amountOfDisplays) public returns (uint,uint,uint,uint,uint,uint){
        Materials memory newMaterial;

        newMaterial.aluminiumBars = amountOfShafts * 16;
        newMaterial.stainlessSteelSheets = amountOfDoors + amountOfShafts * 4;
        newMaterial.hardware = amountOfDoors * 2;
        newMaterial.rubberBands = amountOfDoors * 2;
        newMaterial.lighBulbs = amountOfShafts * 8;
        newMaterial.displayLeds = amountOfControllers +amountOfDisplays + amountOfButtons;

        aluminiumBars = newMaterial.aluminiumBars;
        stainlessSteelSheets = newMaterial.stainlessSteelSheets;
        hardware = newMaterial.hardware;
        rubberBands = newMaterial.rubberBands;
        lightBulbs = newMaterial.lighBulbs;
        displayLeds = newMaterial.displayLeds;

        materialListCount++;
        materials[materialListCount] = newMaterial;
        materialList.push(newMaterial);

        return (newMaterial.aluminiumBars, newMaterial.stainlessSteelSheets, newMaterial.hardware, newMaterial.rubberBands, newMaterial.lighBulbs, newMaterial.displayLeds);
=======
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
>>>>>>> da2c891de55a476e934690c0ba7756435488af9d
    }

    function getContractAddress()public view returns(address){
        return address(this);
    }
}