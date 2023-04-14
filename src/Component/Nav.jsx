import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {FiShoppingCart} from 'react-icons/fi';
import {CgMenu, CgClose} from 'react-icons/cg'

const Nav = () => {
  return <>
  <Navbar>
    <div className="nav active">
        <ul className="nav-list">
            <li>
                <NavLink to="/" className="nav-link">Home</NavLink>
                
            </li>
            <li>
                <NavLink to="/about" className="nav-link">About</NavLink>
                
            </li>
            <li>
                <NavLink to="/products" className="nav-link">Products</NavLink>
                
            </li>
            <li>
                <NavLink to="/contact" className="nav-link">Contact  </NavLink>
                
            </li>
            <li><NavLink to="/cart" className="nav-link cart-link">
                <FiShoppingCart className="cart-logo"/>
                <span className="cart-count">10</span>
            </NavLink>
            </li>
        </ul>
        {/* button for responsive nav */}
        <div className="mobile-navbar">
            <CgMenu name="menu-outline"  className='menu-icon'/>
            <CgClose name="close-outline"  className='menu-icon close-icons'/>

        </div>
    </div>


  </Navbar>
  </>
}
const Navbar=styled.nav`
.nav-list{
    display:flex;
    gap:4rem;
    align-items:center;

    .nav-link{
            text-decoration:none;
            font-size:1.8rem;
            color:#1A59A8;
            
        }
        .cart-link{
            position:relative;

        }

            .cart-logo{
                position:relative;
                font-size:3rem;
                color:#1A59A8;
            }

                .cart-count{
                    width:1.9rem;
                    height:1.9rem;
                    position:absolute;
                    background-color:#000;
                    color:#fff;
                    display:grid;
                    place-items:center;
                    top:0px;
                    left:28px;
                    border-radius:50%;
                    background-color:${({theme})=> theme.colors.helper};
                    font-size:1.3rem;
                }
            
       
        
    }
    .mobile-navbar{
        display:none;
        background:transparent;
        cursor:pointer;
        border:none;
    }
    .menu-icon[name="close-outline]{
        display:none;
    }
    .close-icons{
        display:none
    }
    @media (max-width:${({theme})=>theme.media.mobile}){
        .mobile-navbar{
            display:inline-block;
            z-index:9999;
            
        }
        .menu-icons{
            font-size:4rem;
        }

    

    .active .menu-icons{
        display:none;
        font-size:4.3rem;
        position:absolute;
        top:30%;
        right:30%;
        z-index:9999;
    }
    .active .close-outline{
        display:inline-block;

    }
    .nav-list{
        width:100vw;
        height:100vh;
        position:absolute;
        top:0;
        left:0;
        background-color:white;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        visibility:hidden;
        opacity:0;
        transform:translateX(100%);
        transition:all 3s linear;


    }
    .active .nav-list{
        visibility:visible;
        opacity:1;
        transform:translateX(0);
        z-index:999;
        transform-origin:right;
        transition:all 3s linear;

    }
    .nav-link{
        font-size:4rem;
    }

}













}





`


export default Nav