import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {FiShoppingCart} from 'react-icons/fi'

const Nav = () => {
  return <>
  <Navbar>
    <div className="nav">
        <div className="nav-list">
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
            color:#000;
            
        }
        .cart-link{
            position:relative;

        }

            .cart-logo{
                position:relative;
                font-size:3rem;
                color:#0F51A4;
            }

                .cart-count{
                    width:2rem;
                    height:2rem;
                    position:absolute;
                    background-color:#000;
                    color:#fff;
                    display:grid;
                    place-items:center;
                    top:-20px;
                    left:15px;
                    border-radius:50%;
                    background-color:${({theme})=> theme.colors.helper}
                }
            
       
        
    }










}





`


export default Nav