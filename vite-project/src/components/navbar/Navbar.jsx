import React, { useState } from 'react'
import { assets } from "../../assets/assets"
import { IoIosSearch } from "react-icons/io";
import { IoIosBasket } from "react-icons/io";
import "./Navbar.css"
const Navbar = () => {
    const [menu,setMenu] = useState("home")
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='logo' />

        <ul className="navbar-menu">
            <li onClick={()=> setMenu("home")} className={menu==="home"?"active":""}>Home</li>
            <li onClick={()=> setMenu("shope")} className={menu==="shope"?"active":""}>Shop</li>
            <li onClick={()=> setMenu("about")} className={menu==="about"?"active":""}>About Us</li>
            <li onClick={()=> setMenu("contact")} className={menu==="contact"?"active":""}>Contact Us</li>
        
        </ul>
        <div className="navbar-right">
        <IoIosSearch className="icons"/>
            <div className="navbar-search-icon">
            <IoIosBasket className="icons"/>
                <div className="dot"></div>
            </div>
                <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar