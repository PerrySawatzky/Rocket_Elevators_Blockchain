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
      submitedElevators: 0
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    const submitedElevators =  this.state.smList.methods.createElevator(this.aluminiumBars.value, this.stainlessSteelSheets.value, this.hardware.value, this.rubberBands.value, this.lightBulbs.value, this.displayLEDs.value).call();
    this.setState({ submitedElevators })
    console.log("aluminiumBars: ", this.aluminiumBars.value)
    submitedElevators.then((res) => {
      console.log(res);
    })
    this.setState({ [event.target.name] : [event.target.value] });
    
    this.state.smList.methods.createElevator(this.aluminiumBars.value, this.stainlessSteelSheets.value, this.hardware.value, this.rubberBands.value, this.lightBulbs.value, this.displayLEDs.value).send({ from: this.state.account })
  }

  

  render() {
  return (
      <div className="container">
        <h1>Solutions Manufacturing</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-floating row mb-3">
              <input className="form-control" id="input_aluminiumBars" name='aluminiumBars' ref={(input) => this.aluminiumBars = input} type="text" />
              <label for="input_aluminiumBars">Amount of aluminiumBars: </label>
            </div>
            <div className="form-floating row mb-3">
               <input className="form-control" id="input_stainlessSteelSheets" name='stainlessSteelSheets' ref={(input) => this.stainlessSteelSheets = input} type="text"  />
              <label for="input_stainlessSteelSheets">Amount of stainlessSteelSheets: </label>
            </div>
            <div className="form-floating row mb-3">
              <input className="form-control" id="input_hardware" name='hardware' ref={(input) => this.hardware = input} type="text" />
              <label for="input_hardware">Amount of hardware: </label>
            </div>
            <div className="form-floating row mb-3">
              <input className="form-control" id="input_rubberBands" name='rubberBands' ref={(input) => this.rubberBands = input} type="text"  />
              <label for="input_rubberBands">Amount of rubberBands: </label>
            </div>
            <div className="form-floating row mb-3">
              <input className="form-control" id="input_lightBulbs" name='lightBulbs' ref={(input) => this.lightBulbs = input} type="text"  />
              <label for="input_lightBulbs">Amount of lightBulbs: </label>
            </div>
            <div className="form-floating row mb-3">
              <input className="form-control" id="input_displayLEDs" name='displayLEDs' ref={(input) => this.displayLEDs = input} type="text"  />
              <label for="input_displayLEDs">Amount of displayLEDs: </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
