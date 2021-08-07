import Web3 from 'web3';
import '../App.css';
import React, { Component } from 'react';
import { QUALITY_ADDRESS,  QUALITY_ABI } from '../config'

class quality extends Component {
  
    componentWillMount() {
      this.loadBlockChainData('','','','','')
    }

    async loadBlockChainData(a,b,c,d,e) {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
        const network = await web3.eth.net.getNetworkType()
        console.log('network:', network)
        const accounts = await web3.eth.getAccounts()
        console.log('account', accounts)
        this.setState({ account: accounts[0] })
        const qualityContract = new web3.eth.Contract(QUALITY_ABI, QUALITY_ADDRESS)
        this.setState({ qualityContract })
        this.setState({})
        const qualityFunction = await qualityContract.methods.qualCheck(a,b,c,d,e).call()
        this.setState({ qualityFunction })
        console.log('qualityFunction:', qualityFunction)
    }

    constructor(props) {
        super(props)
        this.state = { 
          account: '',
          orderCount: 0
        }
    
        this.doorInput = this.doorInput.bind(this);
        this.cableInput = this.cableInput.bind(this);
        this.brakeInput = this.brakeInput.bind(this);
        this.batteryInput = this.batteryInput.bind(this);
        this.certificationInput = this.certificationInput.bind(this);
      }
    
      doorInput(event){
        this.setState({door : event.target.value})
        console.log('door', this.state.door)
      }
    
      cableInput(event){
        this.setState({cable : event.target.value})
        console.log('cable', this.state.cable)
      }
    
      brakeInput(event){
        this.setState({brake : event.target.value})
        console.log('brake', this.state.brake)
      }
    
      batteryInput(event){
        this.setState({battery : event.target.value})
        console.log('battery', this.state.battery)
      }

      certificationInput(event){
        this.setState({certificate : event.target.value})
        console.log('certificate', this.state.certificate)
      }
    
      handleSubmit(event) {
        alert(this.state.ca);
        event.preventDefault();
        // event.preventDefault()
        // this.setState({ [event.target.name] : [event.target.value] });
        // this.state.qualityContract.methods.qualCheck(this.state.door, this.this.state.cable, this.state.brake, this.state.battery, this.state.certificate).send({ from: this.state.account });
      }
    
    
      render() {
        return (
          <div className='container'>
            <div>
              <h1>Account number: {this.state.account}</h1>
              <form onSubmit={this.handleSubmit}>
                <label>Door Test:</label>   
                    <input type='text' onChange={this.doorInput} required></input>
                <br></br>
                <br></br>
                <label>Cable Test:</label>   
                    <input type='text' onChange={this.cableInput} required></input>
                <br></br>
                <br></br>
                <label>Brake Test:</label>   
                    <input type='text' onChange={this.brakeInput} required></input>
                <br></br>
                <br></br>
                <label>Battery Permit:</label>   
                    <input type='text' onChange={this.batteryInput} required></input>
                <br></br>
                <label>Certification:</label>   
                    <input type='text' onChange={this.certificationInput} required></input>
                <br></br>  
                    <input type='submit' ></input>
              </form>
            </div>
          </div>
        )
      }
}

export default quality
