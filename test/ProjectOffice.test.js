const ProjectOffice = artifacts.require("ProjectOffice")

contract('ProjectOffice', () => {
    
    it ("should deploy project office properly", async() =>{
        console.log("Address :" + ProjectOffice.address);
        assert(ProjectOffice.address !== '');
    });
})