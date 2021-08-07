import React from 'react'
import ethereum from '../../src/ethereum1.png'

const Home = () => {
    return (
        <div 
        style= {{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '90vh'
            }}>
            <div><h1 id="Title">Safest place in the Industry to place order for your elevator needs.</h1></div>
            <div><img src={ethereum} alt='ethereum-logo'></img></div>
        </div>
    )
}

export default Home
