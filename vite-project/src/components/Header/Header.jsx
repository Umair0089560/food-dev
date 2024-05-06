import React from "react";
import Slider from "react-slick";
import { assets } from "../../assets/assets";
import './Header.css'
export default function Header() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
   <div className="mt-lg-5">
     <Slider {...settings}>
      <div className="banner">
        <img className="img-fluid" src={assets.banner_1} alt="" />
      </div>
      <div className="banner">
        <img className="img-fluid" src={assets.banner_2} alt="" />
      </div>
      <div className="banner">
      <img className="img-fluid" src={assets.banner_3} alt="" />
      </div>
    
    </Slider>

    <h2 className="mt-5 text-light bold">Explore Menu</h2>
   </div>
  );
}

