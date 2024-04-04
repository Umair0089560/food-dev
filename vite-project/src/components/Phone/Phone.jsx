import React from "react";

import { assets } from "../../assets/assets";
import { BsTruck } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";
const Phone = () => {
  return (
    <div className="container pt-5">
      <div className="row mt-5">
        <div className="col-lg-6 col-12">
          <img className="IMG-HEADER" src={assets.food_Clay} alt="" />
        </div>
        <div className="col-lg-6 col-12 header-content">
          <h2 className="text-light fs-1">DON'T WORRY ! YOU CAN ORDER YOUR FOOD JUST BY PHONE</h2>
          <p className="phone-text">
            You can order your favorite food with just a phone call. At Burger
            Resort, we believe in convenience without compromise. Simply dial{" "}
            <span>+92-300 1007826</span> or <span>041-8502199</span>, and let us
            take care of the rest. Enjoy the best food, hassle-free!
          </p>
          <div className="border p-3 changing_border">
            <div className="d-flex gap-5">
              <div className="border p-5 icon-border">
                <BsTruck />
              </div>
              <div className="d-block">
                <h4 style={{color: "#8c7000"}} className="text-bold">FREE DELIVERY</h4>
                <p className="phone-text">
                  Enjoy the ultimate convenience with our Free Delivery service!
                </p>
              </div>
            </div>
          </div>
          <div className="border p-3 changing_border mt-4">
            <div className="d-flex gap-5">
              <div className="border p-5 icon-border">
                <FaMoneyBillWave />
              </div>
              <div className="d-block">
                <h4 style={{color: "#8c7000"}} className="text-bold">SPECIAL PROMO</h4>
                <p className="phone-text">
                Get ready for a flavor-filled treat with our Special Prom
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex mt-5 gap-5">
                <img src={assets.app_store} alt="" />
                <img src={assets.play_store} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
