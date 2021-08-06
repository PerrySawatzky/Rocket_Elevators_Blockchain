import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import {SOLUTIONS_MANUFACTURING_ADDRESS, SOLUTIONS_MANUFAFCTURING_ABI} from './config'

class App extends Component {

  componentWillMount() {
    this.loadBlockChainData();
  }
  
  async loadBlockChainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    const network = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const smList = new web3.eth.Contract(SOLUTIONS_MANUFAFCTURING_ABI, SOLUTIONS_MANUFACTURING_ADDRESS)
    this.setState({ smList })
    const createElevator = await smList.methods.createElevator(30, 30, 30, 30, 30, 30).call()
    this.setState({ createElevator })
    console.log('createElevator: ', createElevator)
    console.log('smList: ', smList)
    console.log("account: ", accounts[0])
    console.log("network: ", network)
  }

  constructor(props) {
    super(props);
    this.state = { 
      value: '',
      account: '',
      createElevator: 0,
      aluminiumBars: '',
      stainlessSteelSheets: '',
      hardware: '',
      rubberBands: '',
      lightBulbs: '',
      displayLEDs: '',
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ [event.target.name] : [event.target.value] });
    this.state.smList.methods.createElevator(this.aluminiumBars.value, this.stainlessSteelSheets.value, this.hardware.value, this.rubberBands.value, this.lightBulbs.value, this.displayLEDs.value).send({ from: this.state.account })
    submitedElevators = this.state.smList.methods.createElevator(this.aluminiumBars.value, this.stainlessSteelSheets.value, this.hardware.value, this.rubberBands.value, this.lightBulbs.value, this.displayLEDs.value).call();
  }

  

  render() {
  return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Amount of aluminiumBars:
            <input name='aluminiumBars' ref={(input) => this.aluminiumBars = input} type="text" />
          </label>
          <label>
            Amount of stainlessSteelSheets:
            <input name='stainlessSteelSheets' ref={(input) => this.stainlessSteelSheets = input} type="text"  />
          </label>
          <label>
            Amount of hardware:
            <input name='hardware' ref={(input) => this.hardware = input} type="text" />
          </label>
          <label>
            Amount of rubberBands:
            <input name='rubberBands' ref={(input) => this.rubberBands = input} type="text"  />
          </label>
          <label>
            Amount of lightBulbs:
            <input name='lightBulbs' ref={(input) => this.lightBulbs = input} type="text"  />
          </label>
          <label>
            Amount of displayLEDs:
            <input name='displayLEDs' ref={(input) => this.displayLEDs = input} type="text"  />
          </label>
          <input type="submit" value="Submit" />
        </form>
        
        
        
        <h1>Your Account</h1>
        <p>Your account: {this.state.account}</p>
        <p>Elevator Cabs: {this.state.createElevator[0]}</p>
        <p>Doors: {this.state.createElevator[1]}</p>
        <p>Controllers: {this.state.createElevator[2]}</p>
        <p>Control Panels: {this.state.createElevator[3]}</p>
        <p>Displays: {this.state.createElevator[4]}</p>

        <p>Elevator Cabs : {}</p>
      </div>
    );
  }
}

export default App;
