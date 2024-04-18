import React, { useState } from 'react'
import { assets } from "../../assets/assets"
import { IoIosSearch } from "react-icons/io";
import { IoIosBasket } from "react-icons/io";
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("home")
  return (
    <div className='navbar'>
        <Link to="./">
        <img src={assets.logo} alt="" className='logo' />
        </Link>

        <ul className="navbar-menu">
            <Link to={"./"} onClick={()=> setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=> setMenu("shope")} className={menu==="shope"?"active":""}>Shop</a>
            <a href='#Phone' onClick={()=> setMenu("about")} className={menu==="about"?"active":""}>About Us</a>
            <a href='#footer' onClick={()=> setMenu("contact")} className={menu==="contact"?"active":""}>Contact Us</a>
        
        </ul>
        <div className="navbar-right">
        <IoIosSearch className="icons"/>
            <Link to="/cart">
            <div className="navbar-search-icon">
            <IoIosBasket className="icons"/>
                <div className="dot"></div>
            </div>
            </Link>
                <button onClick={()=> setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar