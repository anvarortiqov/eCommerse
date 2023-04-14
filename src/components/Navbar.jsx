import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai'
import {IconContext} from 'react-icons'
import './navbar.css'
function Navbar() {
  const {open, setOpen}=useState(true)  
  return (
    <nav className='nav'>
        <div className="container row">
            <div className="logo">
                <a href="#" className='logo__link'><img src={logo} alt="logo" /></a>   
            </div>
            <ul>
               <li><a href="#" className='nav__link'>Discovery</a></li> 
               <li><a href="#" className='nav__link'>About</a></li>
               <li><a href="#" className='nav__link'>Contact us</a></li>
            </ul>
            <div className="nav__bnts flex ">
                <IconContext.Provider value={{size:'25px'}}>
                    <AiOutlineUser/>
                 
                        <AiOutlineShoppingCart/>   <sup>2</sup>  
    
                </IconContext.Provider>
            </div>
        </div>
    </nav>
  )
}

export default Navbar