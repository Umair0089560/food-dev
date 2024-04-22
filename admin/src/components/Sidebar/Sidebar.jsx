import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to={"/add"} className="sidebar-option">
                <img src={assets.add_icon_white} alt="" />
                <p>Add Item</p>
            </NavLink>
            <NavLink to={"/list"} className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>List Item</p>
            </NavLink>
            <NavLink to={"/order"} className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>Order</p>
            </NavLink>

        </div>
       
            <div className="wid-title mt-5">

            <span>SUBSCRIBE & FOLLOW</span>


            <div className='social-icons ms-lg-5 mt-lg-4'>
               <div className='mt-lg-4 mb-lg-4 text-light icons'><a href="#"><FaFacebookF  /></a></div>
               <br></br>
               <div className='text-light mt-lg-4 icons'><a href="#"><FaTwitter /></a></div>
               <br></br>
               <div className='mt-lg-4 mb-lg-4 text-light icons'><a href="#/"><FaLinkedinIn /></a></div>
               <br></br>
               <div className='text-light mt-lg-4 icons'><a href="#"><FaInstagram /></a></div>
            
               
               </div>
            </div>
          
    </div>
  )
}

export default Sidebar