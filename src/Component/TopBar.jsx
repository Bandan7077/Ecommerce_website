import React from 'react';
import styled from 'styled-components';
import {RiCustomerService2Line }from 'react-icons/ri';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFacebook,BsInstagram,BsTwitter,BsLinkedin} from 'react-icons/bs'


const TopBar = () => {
  return <>
  <Topbar>
    <div className="topbar-info">
        <div className="contact">
        <div className="contact-info">
            <RiCustomerService2Line className="customer-icons"/>
            <p className="number"><span>Customer Service:</span> +91-5234285259</p>
        </div>
        <div className="contact-info">
        <HiOutlineMail className="customer-icons"/>
        <p className="number"><span>Mail:</span> +91-5234285259</p>

        </div>

        </div>
       
        <div className="social-icons">
            <BsFacebook className="icons-items"/>
            <BsInstagram className="icons-items"/> 
            <BsTwitter className="icons-items"/>
            <BsLinkedin className="icons-items"/>


        </div>
    </div>



  </Topbar>
  
  </>
}

const Topbar=styled.div`
width:100%;
height:4rem;
background-color:#1a59a8;
display:flex;
align-items:center;
justify-content:space-around;
font-family:Roboto,Arial,sans-serif;
font-weight:500 !important;
.customer-icons{
    font-size:2rem;
    color:white;
}
.contact{
    display:flex;
    align-items:center;
    gap:3rem;
}
.topbar-info{
    width:100%;
    display:flex;
    justify-content:space-around;
}
.contact-info{
    display:flex;
    gap:.5rem;
    align-items:center;
}
.number{
    color:white;
    display:flex;
    align-items:center;
    gap:.5rem;
    margin:0px !important;
}
.social-icons{
    display:flex;
    align-items:center;
    gap:4rem;
    

    }

    .icons-items{
        color:white;
        font-size:1.7rem;
        cursor:pointer;

       
    }
}

   




`

export default TopBar;