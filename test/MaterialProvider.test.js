const MaterialProvider = artifacts.require("MaterialProvider");

contract("MaterialProvider", (accounts) => {

    it("should be a quantity of 5", function(){
        return MaterialProvider.deployed().then(function(instance){
            return instance.getCountaluminumBars.call();
        }).then(function(quantity){
            assert.equal(quantity, 5, "5 was not in the contract");
        });
    });
    it("should be a quantity of 10", function(){
        return MaterialProvider.deployed().then(function(instance){
            return instance.getCountstainlessSteelSheets.call();
        }).then(function(quantity){
            assert.equal(quantity, 10, "10 was not in the contract");
        });
    });
    it("should be a quantity of 9", function(){
        return MaterialProvider.deployed().then(function(instance){
            return instance.getCountHardware.call();
        }).then(function(quantity){
            assert.equal(quantity, 9, "9 was not in the contract");
        });
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
        assert.equal(symbol, "MATERIALPROVIDER");
    });
    // describe ("minting", async() => {
    
    //     it("creates a new token", async() => {
    //         const result = await contract.mint('aluminumBars');
    //         const totalSupply = await contract.totalSupply();
    //         //SUCESS
    //         assert.equal(totalSupply, 1);
    //         console.log(result);
    //     });
    // });
});