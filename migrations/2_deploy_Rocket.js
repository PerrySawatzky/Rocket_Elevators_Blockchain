const RocketElevatorToTheMoon = artifacts.require("RocketElevatorToTheMoon");

module.exports = function(deployer) {
  deployer.deploy(RocketElevatorToTheMoon, 1000000);
};