var SolutionsManufacturing = artifacts.require("SolutionsManufacturing");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(SolutionsManufacturing);
};