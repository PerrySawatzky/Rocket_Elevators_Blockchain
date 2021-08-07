// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;
import "./ERC721.sol";

contract QualitySecurity is ERC721 {
    constructor() ERC721("QualitySecurity", "QUALITY") public {
    }
    Quality qual;
    struct Quality {
        string doorTest;
        string cableTest;
        string brakeTest;
        string batteryPermit;
        string certificate;
    }

    //Calcul material base on input component
    function qualCheck(string memory doorTest, string memory cableTest, string memory brakeTest, string memory batteryPermit, string memory certificate) public returns (string memory,string memory,string memory,string memory,string memory) {

        
        qual.doorTest = doorTest;
        qual.cableTest = cableTest;
        qual.brakeTest = brakeTest;
        qual.batteryPermit = batteryPermit;
        qual.certificate = certificate;
        return (qual.doorTest, qual.cableTest, qual.brakeTest, qual.batteryPermit, qual.certificate);
    }

    //Retrieving the value
    function retrive() public view returns (Quality memory) {
        return qual;
    }
}