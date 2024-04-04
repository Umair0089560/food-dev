import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
const Header = () => {
  return (
    <div className="container pt-5">
      <div className="row mt-5">
        <div className="col-lg-6 col-12">
          <img className="IMG-HEADER" src={assets.N2HMMGN} alt="" />
        </div>
        <div className="col-lg-6 col-12 header-content">
          <h2>WELCOME TO BURGER RESORT-THE SAUCE EXPERT.</h2>
          <p>
          Burger Resort, The Sauce Expert. We will serve you with different types of burgers, wraps, fries, nuggets, wings, loaded fries and a finger licking taste of different types of spices. Hence the name is, ” The Sauce Expert” The best burger point in the town.
          </p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
