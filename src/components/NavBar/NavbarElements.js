import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

document.body.style = 'background: #E9E9E9;';

export const Nav = styled.nav`
    background: #fff;
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((70vw - 1000px) / 2);
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: bold;

    &.active {
        color: #15cdfc;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #000;

    @media screen and (max-width: 768px) {
        display: block;
        position; absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 21px;
    background: #286699;
    padding: 10px 26px;
    color: #fff;
    font-weight: bold;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #327ebd;
        color: #fff;
    }
`