// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract MaterialProvider is ERC721 {

    constructor() ERC721("MaterialProvider", "MATERIALPROVIDER") {
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

        newMaterial.aluminiumBars = amountOfShafts*16;
        newMaterial.stainlessSteelSheets = amountOfShafts*4 + amountOfDoors;
        newMaterial.hardware = amountOfDoors*2;
        newMaterial.rubberBands = amountOfDoors*2;
        newMaterial.lighBulbs = amountOfShafts*8;
        newMaterial.displayLeds = amountOfButtons + amountOfDisplays + amountOfControllers;

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
    }

    function getContractAddress()public view returns(address){
        return address(this);
    }
}