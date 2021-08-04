pragma solidity ^0.5.16;

contract MaterialProvider {
    uint bars = 0;
    uint sheets = 0;
    uint hardware = 0;
    uint bands = 0;
    uint bulbs = 0;
    uint panels = 0;

    event Increment(uint value);
    event Decrement(uint value);

    function getCountBars() view public returns (uint) {
        return bars;
    }
    
    function getCountSheets() view public returns (uint) {
        return sheets;
    }
    
    function getCountHardware() view public returns (uint) {
        return hardware;
    }
    
    function getCountBands() view public returns (uint) {
        return bands;
    }
    
    function getCountBulbs() view public returns (uint) {
        return bulbs;
    }
    
    function getCountPanels() view public returns (uint) {
        return panels;
    }


    function incrementBars() public {
        bars += 1;
        emit Increment(bars);
    }
    
    function incrementSheets() public {
        sheets += 1;
        emit Increment(sheets);
    }
    
    function incrementHardware() public {
        hardware += 1;
        emit Increment(hardware);
    }
    
    function incrementBands() public {
        bands += 1;
        emit Increment(bands);
    }
    
    function incrementBulb() public {
        bulbs += 1;
        emit Increment(bulbs);
    }
    
    function incrementPanels() public {
        panels += 1;
        emit Increment(panels);
    }
    
    function decrementBars() public {
        bars -= 1;
        emit Decrement(bars);
    }
    
    function decrementSheets() public {
        sheets -= 1;
        emit Decrement(sheets);
    }
    
    function decrementHardware() public {
        hardware -= 1;
        emit Decrement(hardware);
    }
    
    function decrementBands() public {
        bands -= 1;
        emit Decrement(bands);
    }
    
    function decrementBulb() public {
        bulbs -= 1;
        emit Decrement(bulbs);
    }
    
    function decrementPanels() public {
        panels -= 1;
        emit Decrement(panels);
    }

}