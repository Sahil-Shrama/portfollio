import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const Nav =() =>{
    return(
        <StyledNav>
        <h1 id='logo'>Portfollio</h1>
        <ul>
            <li><Link to = '/'>About Me</Link></li>
            <li><Link to ='/MyWork'>My Work</Link></li>
            <li><Link to ='/contactUs'>Contact</Link></li>
        </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    background-color: #282828;
    align-items: center;
    padding: 1rem 10rem;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;

    }
    #logo{
        color: white;
        font-size: 1.8rem;
        font-family: lobster;
        font-weight: lighter;

    }
    li{
        padding-left: 10rem;
        position: relative;
    }
`


export default Nav;