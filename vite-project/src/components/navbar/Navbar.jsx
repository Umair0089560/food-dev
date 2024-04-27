import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { IoIosSearch } from "react-icons/io";
import { IoIosBasket } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();
  const logout =() => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }
  return (
    <div className="navbar">
      <Link to="./">
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to={"./"}
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("shope")}
          className={menu === "shope" ? "active" : ""}
        >
          Shop
        </a>
        <a
          href="#Phone"
          onClick={() => setMenu("about")}
          className={menu === "about" ? "active" : ""}
        >
          About Us
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <IoIosSearch className="icons" />
        <Link to="/cart">
          <div className="navbar-search-icon">
            <IoIosBasket className="icons" />
            <div className={getTotalAmount() === 0 ? "" : "dot"}></div>
          </div>
        </Link>
        {!token ? 
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        : 
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="navbar-profile-dropdown">
              <li>
                <img src={assets.bag_icon} alt="" />
                Orders
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                LogOut
              </li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
