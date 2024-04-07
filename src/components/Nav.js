import React from 'react'
import { styled } from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Nav =() =>{
    const {pathname} = useLocation();
    return(
        <StyledNav>
        <h1 id='logo'>Portfollio</h1>
        <ul>
            <li><Link to = '/'>About Me</Link>
            <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "60%" : "0%" }}
          />
            </li>
            <li><Link to ='/MyWork'>My Work</Link>
            <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/MyWork" ? "60%" : "0%" }}
          />
            </li>
            <li><Link to ='/contactUs'>Contact</Link>
            <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contactUs" ? "60%" : "0%" }}
          />
            </li>
        </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    overflow-x: hidden;
    width: 100vw;
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

@media (max-width: 1200px){ 

    flex-direction: column;
    padding: 1.5rem 1rem;
    #logo{
        display: inline-block;
        /* margin: 2rem; */
    }
    ul{
        padding: 1.5rem;
        justify-content: space-around;
        width: 100%;
        li{
            padding: 0;
        }
}
`;


const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;


export default Nav;