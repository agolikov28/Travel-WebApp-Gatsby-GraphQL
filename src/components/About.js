import React from 'react'
import styled from 'styled-components'
import AboutBg from '../assets/images/maldives-1.jpg'
import Images from './Images'


const About = () => {
  return (
    <AboutContainer>
      <Images/>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.div `
background: linear-gradient(
    180deg, 
    rgba(0,0,0,0.5) 0%,
    rgba(0,0,0,0.5) 35%, 
    rgba(0,0,0,0.1) 100%), 
    url(${AboutBg}) no-repeat center;
    background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
`

