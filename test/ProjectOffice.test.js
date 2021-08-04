const ProjectOffice = artifacts.require("ProjectOffice")

contract('ProjectOffice', () => {
    before( async () => {
        projectOffice = await ProjectOffice.deployed();
        await projectOffice.set(1,2,4,5);// input of the user
    });

    it ("should deploy project office properly", async() =>{
        console.log("Address :" + projectOffice.address);
        assert(projectOffice.address !== '');
    });
})