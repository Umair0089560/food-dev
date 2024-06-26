import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div id="footer">
      <div class="app__footer section__padding" id="login">
        <div class="app__footerOverlay">
          <div class="app__footerOverlay-black"></div>
          <div class="app__footerOverlay-img app__bg"></div>
        </div>
        <div class="app__newsletter">
          <div class="app__newsletter-heading">
            <div style={{ marginBottom: "1rem" }}>
              <p class="p__cormorant">Newsletter</p>
            </div>
            <h1 class="headtext__cormorant">Subscribe To Our Newsletter</h1>
            <p class="p__opensans">And never miss latest Updates!</p>
          </div>
          <div class="app__newsletter-input flex__center">
            <input type="email" placeholder="Enter your email address" />
            <button type="button" class="custom__button">
              Subscribe
            </button>
          </div>
        </div>
        <div class="app__footer-links">
          <div class="app__footer-links_contact">
            <h1 class="app__footer-headtext">Contact Us</h1>
            <p class="p__opensans">
              {" "}
              The Arcadian Plaza Kohinoor City Jaranwala<div></div>road,
              Faisalabad, 38000
            </p>
            <p class="p__opensans"> +92-300 1007826</p>
            <p class="p__opensans"> 041-8502199</p>
          </div>
          <div class="app__footer-links_logo">
            <img src={assets.logo} alt="footer_logo" />
            <p class="p__opensans">
              "The best way to find yourself is to lose yourself in the service
              of others."
            </p>
            <div class="app__footer-links_icons">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
          </div>
          <div class="app__footer-links_work">
            <h1 class="app__footer-headtext">Working Hours</h1>
            <p class="p__opensans">Monday-Sunday:</p>
            <p class="p__opensans">01:00 pm - 01:00 am</p>
            <p class="p__opensans">Friday:</p>
            <p class="p__opensans">02:30 pm - 01:00 am</p>
          </div>
        </div>
        <div class="footer__copyright">
          <p class="p__opensans">2024 Sk Solutions. All Rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
