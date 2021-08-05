var Adoption = artifacts.require("Adoption");
var MaterialProvider = artifacts.require("MaterialProvider");

module.exports = function(deployer) {
  deployer.deploy(Adoption);
  deployer.deploy(MaterialProvider);
};
