// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.1;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MaterialProvider is ERC721 {

    constructor() ERC721 ("MaterialProvider", "MATERIALPROVIDER") public {
    }
    
    uint64 aluminumBars = 5;
    uint64 stainlessSteelSheets = 10;
    uint64 hardware = 9;
    uint64 rubberBands = 6;
    uint64 lightBulbs = 3;
    uint64 displayLEDs = 17;

    function getCountaluminumBars() view public returns (uint) {
        return aluminumBars;
    }
    
    function getCountstainlessSteelSheets() view public returns (uint) {
        return stainlessSteelSheets;
    }
    
    function getCountHardware() view public returns (uint) {
        return hardware;
    }
    
    function getCountRubberBands() view public returns (uint) {
        return rubberBands;
    }
    
    function getCountlightBulbs() view public returns (uint) {
        return lightBulbs;
    }
    
    function getCountDisplayLEDs() view public returns (uint) {
        return displayLEDs;
    }
}