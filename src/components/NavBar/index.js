import React from 'react'
import { Nav, Bars, NavMenu, NavLink, NavBtnLink } from './NavbarElements'
import logo from '../../../src/transparent.png'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={logo}></img>
                    <h2>Rocket Elevators BlockChain</h2>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/office" activeStyle>
                        Production Office
                    </NavLink>
                    <NavLink to="/material" activeStyle>
                        Material Provider
                    </NavLink>
                    <NavLink to="/solution" activeStyle>
                        Solution Manuctafucting
                    </NavLink>
                    <NavLink to="/quality" activeStyle>
                        Quality
                    </NavLink>
                    <NavBtnLink to="/freeeth">Free ETH!</NavBtnLink>
                </NavMenu>
            </Nav>
        </>

    )
}

export default Navbar;
