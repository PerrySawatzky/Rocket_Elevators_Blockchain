var QualitySecurity = artifacts.require("QualitySecurity");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(QualitySecurity);
};