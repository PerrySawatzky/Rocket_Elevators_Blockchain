import Web3 from 'web3';
import '../App.css';
import React, { Component } from 'react';
import { PROJECT_OFFICE_ADDRESS,  PROJECT_OFFICE_ABI } from '../config'

class projectoffice extends Component {
  
    componentWillMount() {
      this.loadBlockChainData('1','2','3','4','5')
    }

    async loadBlockChainData(a,b,c,d,e) {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
        const network = await web3.eth.net.getNetworkType()
        console.log('network:', network)
        const accounts = await web3.eth.getAccounts()
        console.log('account', accounts)
        this.setState({ account: accounts[0] })
        const projectOffice = new web3.eth.Contract(PROJECT_OFFICE_ABI, PROJECT_OFFICE_ADDRESS)
        this.setState({ projectOffice })
        this.setState({})
        const orderCount = await projectOffice.methods.orders(a,b,c,d,e).call()
        this.setState({ orderCount })
        console.log('orderCount:', orderCount)
    }

    constructor(props) {
        super(props)
        this.state = { 
          account: '',
          orderCount: 0
        }
    
        this.batteryInput = this.batteryInput.bind(this);
        this.columnInput = this.columnInput.bind(this);
        this.elevatorInput = this.elevatorInput.bind(this);
        this.floorInput = this.floorInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      batteryInput(event){
        this.setState({battery : event.target.value})
      }
    
      columnInput(event){
        this.setState({column : event.target.value})
      }
    
      elevatorInput(event){
        this.setState({elevator : event.target.value})
      }
    
      floorInput(event){
        this.setState({floor : event.target.value})
      }
    
      handleSubmit(event) {
        event.preventDefault()
        this.setState({ [event.target.name] : [event.target.value] });
        this.state.projectOffice.methods.orders(1, this.state.battery, this.state.column, this.state.elevator, this.state.floor).send({ from: this.state.account });
      }
    
    
      render() {
        return (
          <div className='container'>
            <div>
              <h1>Account number: {this.state.account}</h1>
              <form onSubmit={this.handleSubmit}>
                <label>Batteries:</label>   
                <input type='number' id='battery-num' onChange={this.batteryInput} min='0' required></input>
                <br></br>
                <label>Columns:</label>   
                <input type='number' id='column-num' onChange={this.columnInput} min='0' required></input>
                <br></br>
                <label>Elevators:</label>   
                <input type='number' id='elevator-num' onChange={this.elevatorInput} min='0' required></input>
                <br></br>
                <label>Floors:</label>   
                <input type='number' id='floor-num' onChange={this.floorInput} min='0' required></input>
                <br></br>  
                <input type='submit' ></input>
                <br></br>
                <br></br>
                <label>Shafts:</label> 
                <input type='number' readOnly></input>
                <br></br>
                <label>Controllers:</label> 
                <input type='number' readOnly></input>
                <br></br>
                <label>Doors:</label> 
                <input type='number' readOnly></input>
                <br></br>
                <label>Buttons:</label> 
                <input type='number' readOnly></input>
                <br></br>
                <label>Displays:</label> 
                <input type='number' readOnly></input>
                <br></br>
                <label>Speakers:</label> 
                <input type='number' readOnly></input>
                <br></br>
              </form>
            </div>
          </div>
        )
      }
}


export default projectoffice
