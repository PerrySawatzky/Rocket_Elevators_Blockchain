import Web3 from 'web3';
import './App.css';
import React, { Component } from 'react';
import { PROJECT_OFFICE_ADDRESS,  PROJECT_OFFICE_ABI } from './config'

class App extends Component {

  componentWillMount() {
    this.loadBlockChainData()
  }

  async loadBlockChainData() {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
    const network = await web3.eth.net.getNetworkType()
    console.log('network:', network)
    const accounts = await web3.eth.getAccounts()
    console.log('account', accounts)
    this.setState({ account: accounts[0] })
    const projectOffice = new web3.eth.Contract(PROJECT_OFFICE_ABI, PROJECT_OFFICE_ADDRESS)
    this.setState({ projectOffice })
    const orderCount = await projectOffice.methods.orders(5, 5, 5, 5, 5).call()
    this.setState({ orderCount })
    console.log('orderCount:', orderCount)
  }

  constructor(props) {
    super(props)
    this.state = { 
      account: '',
      orderCount: 0
    }
  }

  render() {
    return (
      <div className='container'>
        <div className="row">
          <main>
            <div className='loader'>
              <p className=''>loading</p>
            </div>
            <div>
              <form>
                <input type='number' placeholder='add something' min='0'></input>
                <input type='submit'></input>
              </form>
              <ul>
                <div>
                  <label>
                    <input type='number' min='0'></input>
                    <span></span>
                  </label>
                </div>
              </ul>
              <ul>

              </ul>
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default App;
