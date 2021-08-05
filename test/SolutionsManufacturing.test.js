const SolutionsManufacturing = artifacts.require("SolutionsManufacturing")

contract('SolutionsManufacturing', () => {
    
    it ("solutions manufacturing should deploy properly", async() =>{
        console.log("Address :" + SolutionsManufacturing.address);
        assert(SolutionsManufacturing.address !== '');
    });
})