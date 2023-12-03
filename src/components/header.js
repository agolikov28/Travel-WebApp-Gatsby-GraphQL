import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {FaBars, FaTimes, FaPaperPlane} from 'react-icons/fa'
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import { useState, useEffect } from "react"

const Header = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)

  const changeNav = () => {
    if(window.scrollY >= 80){
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect (() => {
    changeNav()
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <Nav active={scroll} click={click}>
      <NavLink to='/'> <h1><FaPaperPlane/>&ensp;VisaVentures</h1></NavLink>
      <MobileIcon onClick={handleClick}>
        {click ? <FaTimes/> : <FaBars/>}
      </MobileIcon>
      <NavMenu onClick={handleClick} click={click}>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary='true' round='true' to='/trips'>Book A Flight</Button>
      </NavBtn>
    </Nav>
  )
  
  }

export default Header

const Nav = styled.nav`
  background: ${({active}) => active ? '#fff' : "transparent"};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
  

  @media screen and (max-width: 768px){
    background: ${({click}) => click ? '#f26a2e' : "transparent"};
    transition: 0.8s all ease;

  }
`


const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  h1{
    color: #fff;
}

  @media screen and (max-width: 768px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #ff4040;
      transition: all 0.3s ease;
    }
  }
`
const MobileIcon = styled.div`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${({click}) => click ? '80px' : '-1200px'};
    left: -100%
    opacity: 0.9;
    transition: all 0.5s ease;
    background: #f26a2e;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  
  @media screen and (max-width:768px){
    display: none;
  }
`


