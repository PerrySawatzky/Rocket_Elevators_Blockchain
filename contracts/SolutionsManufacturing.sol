// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract SolutionsManufacturing is ERC721 {
    
    
    
    constructor() ERC721("SolutionsManufacturing", "SM") {
    }

    
    uint public ElevatorCab = 0;
    uint public Doors = 0;
    uint public Controller = 0;
    uint public ControlPanel = 0;
    uint public Display = 0;
    
    struct Products{
        
        address productId;
        bytes32 commandId;
        uint64 elevatorCab;
        uint64 doors;
        uint64 controller;
        uint64 controlPanel;
        uint64 display;
    }
    
    uint64 public productListCount = 0;
    mapping(uint64 => Products) public products;
    address public myAddress = address(this);
    Products[] productList;
    
    
    function createElevator(uint64 aluminiumBars, uint64 stainlessSteelSheets, uint64 hardware, uint64 rubberBands, uint64 lightBulbs, uint64 displayLEDs) public returns (uint64, uint64, uint64, uint64, uint64){
        
        //Creating Elevator Cab
        uint64 nbElevator;
        if (stainlessSteelSheets >= 6 && aluminiumBars >= 12 && hardware >= 4)
        {
            nbElevator = stainlessSteelSheets / 6;
        }

        //Creating Elevator Doors
        uint64 nbDoors;
        if (rubberBands >= nbElevator * 2)
        {
            nbDoors = nbElevator * 2 ;
        }
        
        //Creating Controller
        uint64 nbController;
        if (lightBulbs >= nbElevator){
            nbController = nbElevator ;
        }
        
        //Creating Control Panel
        uint64 nbControlPanel;
        if (displayLEDs >= nbElevator){
            nbControlPanel = nbElevator;
        }
        
        //Creating Display
        uint64 nbDisplay = nbElevator * 2 ;
    
        
        //
        Products memory new_product;
        new_product.productId = msg.sender;
        new_product.elevatorCab = nbElevator;
        new_product.doors = nbDoors;
        new_product.controller = nbController;
        new_product.controlPanel = nbControlPanel;
        new_product.display = nbDisplay;
        uint _id = productList.length;
        _mint(msg.sender, _id);

        //Pushing new Elevator to list
        productListCount++;
        products[productListCount] = new_product;
        productList.push(new_product);
        return (new_product.elevatorCab, new_product.doors, new_product.controller, new_product.controlPanel, new_product.display);
    }
}