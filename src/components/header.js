import React from 'react';
import { NavLink } from "react-router-dom";
const Header = () => {
    return(
        <div id="header"> 
           <NavLink  className="logo" to="/"><img className='img' alt='Austral Brass logo'  src="/images/logo.png"/></NavLink>     
           <nav id="nav">
            <NavLink  className="main-link" to="/">Home</NavLink>
            <NavLink  className="main-link" to="/services">Services</NavLink>    
            <NavLink  className="main-link" to="/about">About Us</NavLink>            
            <NavLink  className="main-link" to="/products">Products</NavLink>
            <NavLink  className="main-link" to="/contact">Contact Us</NavLink>
            <NavLink  className="main-link" to="/dashboard">Dashboard</NavLink>
            </nav>    
 
        </div>
    )


}
export default Header