const MaterialProvider = artifacts.require("MaterialProvider");

contract("MaterialProvider", (accounts) => {

    const ProjectOffice = artifacts.require("ProjectOffice")

    contract('ProjectOffice', () => {
        
        it ("should deploy project office properly", async() =>{
            console.log("Address :" + ProjectOffice.address);
            assert(ProjectOffice.address !== '');
        });
    })
    before(async () => {
        contract = await MaterialProvider.deployed();
    });
    it("has a name", async() => {
        const name = await contract.name();
        assert.equal(name, "MaterialProvider");
    });
    it("has a symbol", async() => {
        const symbol = await contract.symbol();
        assert.equal(symbol, "MATERIALPROVIDER");
    });
});