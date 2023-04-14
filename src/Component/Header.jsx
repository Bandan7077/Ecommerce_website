import React from 'react';
import { NavLink } from 'react-router-dom';
import styled  from 'styled-components';
import Nav from './Nav';
import TopBar from './TopBar';
import HeroSection from './HeroSection';

const Header = () => {
  return <>
   <TopBar/>
  <MainHeader>
   <NavLink>
        <img src="./images/logo.png" alt="my logo" className="logo" />
    </NavLink>
    <Nav/>

  </MainHeader>
  <HeroSection/>
  </>
}
const MainHeader=styled.header`

height:7rem;
background-color:${({theme})=> theme.colors.bg};
display:flex;
justify-content:space-around;
align-items:center;
position:relative;
padding:1rem;
box-shadow: 1px 1px 5px -1px #d5d1d1;

   .logo{
    height:7rem;
   }






`


export default Header;