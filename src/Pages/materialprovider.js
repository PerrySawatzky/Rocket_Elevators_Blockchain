import Web3 from 'web3';
import '../App.css';
import React, { Component } from 'react';
import { MATERIAL_PROVIDER_ADDRESS,  MATERIAL_PROVIDER_ABI } from '../config'

class materialprovider extends Component {
  
    componentWillMount() {
      this.loadBlockChainData(1,1,1,1,1)
    }

    async loadBlockChainData(a,b,c,d,e) {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
        const network = await web3.eth.net.getNetworkType()
        console.log('network:', network)
        const accounts = await web3.eth.getAccounts()
        console.log('account', accounts)
        this.setState({ account: accounts[0] })
        const materialProvider = new web3.eth.Contract(MATERIAL_PROVIDER_ABI, MATERIAL_PROVIDER_ADDRESS)
        this.setState({ materialProvider })
        this.setState({})
        const materialProvMethod = await materialProvider.methods.createMaterials(a,b,c,d,e).call()
        this.setState({ materialProvMethod })
        console.log('materialProvMethod:', materialProvMethod)
    }

    constructor(props) {
        super(props)
        this.state = { 
          account: '',
          orderCount: 0
        }
    
        this.amountOfShafts = this.amountOfShafts.bind(this);
        this.amountOfControllers = this.amountOfControllers.bind(this);
        this.amountOfDoors = this.amountOfDoors.bind(this);
        this.amountOfButtons = this.amountOfButtons.bind(this);
        this.amountOfDisplays = this.amountOfDisplays.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      amountOfShafts(event){
        this.setState({shafts : event.target.value})
      }
    
      amountOfControllers(event){
        this.setState({controllers : event.target.value})
      }
    
      amountOfDoors(event){
        this.setState({doors : event.target.value})
      }
    
      amountOfButtons(event){
        this.setState({buttons : event.target.value})
      }

      amountOfDisplays(event){
        this.setState({displays : event.target.value})
      }
    
      handleSubmit(event) {
        event.preventDefault()
        this.setState({ [event.target.name] : [event.target.value] });
        this.state.materialProvider.methods.createMaterials(this.state.shafts, this.state.controllers, this.state.doors, this.state.buttons, this.state.displays).send({ from: this.state.account });
      }
    
    
      render() {
        return (
          <div className='container'>
            <div>
              <h1>Account number: {this.state.account}</h1>
              <form onSubmit={this.handleSubmit}>
                <label>amountOfShafts:</label>   
                <input type='number' id='shafts-num' onChange={this.amountOfShafts} min='0' required></input>
                <br></br>
                <label>amountOfControllers:</label>   
                <input type='number' id='controllers-num' onChange={this.amountOfControllers} min='0' required></input>
                <br></br>
                <label>amountOfDoors:</label>   
                <input type='number' id='doors-num' onChange={this.amountOfDoors} min='0' required></input>
                <br></br>
                <label>amountOfButtons:</label>   
                <input type='number' id='buttons-num' onChange={this.amountOfButtons} min='0' required></input>
                <br></br>
                <label>amountOfDisplays:</label>   
                <input type='number' id='displays-num' onChange={this.amountOfDisplays} min='0' required></input>
                <br></br>
                <input type='submit' ></input>
                <br></br>
              </form>
            </div>
          </div>
        )
      }
}

export default materialprovider