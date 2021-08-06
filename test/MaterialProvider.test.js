const MaterialProvider = artifacts.require("MaterialProvider")

contract('MaterialProvider', () => {
    
    it ("should deploy project office properly", async() =>{
        console.log("Address :" + MaterialProvider.address);
        assert(MaterialProvider.address !== '');
    });
    before(async () => {
        contract = await MaterialProvider.deployed();
    });
    before(async () => {
        contract = await MaterialProvider.deployed();
    });
    it("has a name", async() => {
        const name = await contract.name();
        assert.equal(name, "MaterialProvider");
    });
    it("has a symbol", async() => {
        const symbol = await contract.symbol();
        assert.equal(symbol, "MP");
    });
});