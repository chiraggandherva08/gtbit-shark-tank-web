import React from "react";
import "./style.css";

const Banner = () => {
  return (
    <div id="banner">
      <img id="banner-bg" src="/assets/hero-img.jpg" alt="hero-img" />

      <div id="about-banner">
        <h1 className="heading">SHARK TANK</h1>
        <h2 className="details"> <img src="/assets/calandar.svg" alt="calandar" /> 15 Sep 2023</h2>

        <div id="banner-links">
          <a href="#contact"></a>
          <a id="contact-us-btn" href="contact-us">
            Contact us
          </a>
        </div>

        <div id="social-media">
          <a href="https://www.instagram.com/" target="_blank">
            <img src="/assets/social/instagram.svg" alt="" />
          </a>

          <a href="https://www.whatsapp.com/" target="_blank">
            <img src="/assets/social/whatsaap.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
