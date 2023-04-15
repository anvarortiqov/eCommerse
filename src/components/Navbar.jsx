import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai'
import {IconContext} from 'react-icons'
import './navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  const {open, setOpen}=useState(true)  
  return (
    <nav className='nav'>
        <div className="container row">
            <div className="logo">
                <Link to="/" className='logo__link'><img src={logo} alt="logo" /></Link>   
            </div>
            <ul>
               <li><a href="#" className='nav__link'>Discovery</a></li> 
               <li><a href="#" className='nav__link'>About</a></li>
               <li><a href="#" className='nav__link'>Contact us</a></li>
            </ul>
            <div className="nav__bnts flex ">
                <IconContext.Provider value={{size:'25px'}}>
                    <Link to="/shop">
                        <AiOutlineUser/>
                        <AiOutlineShoppingCart/>   <sup>2</sup>  
                    </Link>
                     
    
                </IconContext.Provider>
            </div>
        </div>
    </nav>
  )
}

export default Navbar