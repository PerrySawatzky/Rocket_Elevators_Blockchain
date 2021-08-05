const SolutionsManufacturing = artifacts.require("SolutionsManufacturing")

contract('SolutionsManufacturing', () => {
    before( async () => {
        solutionsManufacturing = await SolutionsManufacturing.deployed();
        await solutionsManufacturing.set(1,2,4,5);// input of the user
    });

    it ("solutions manufacturing should deploy properly", async() =>{
        console.log("Address :" + solutionsManufacturing.address);
        assert(solutionsManufacturing.address !== '');
    });
})