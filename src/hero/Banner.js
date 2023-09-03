import React from "react";
import "./style.css";

window.addEventListener("scroll", (event) => {
    const heading = document.querySelector(".heading");
    const img = document.querySelector("#banner-bg");

    const letter_scape = window.scrollY;
    
    img.style.transform = `translateY(${letter_scape * 2}px)`;
    img.style.filter = `blur(${letter_scape * 0.05}px)`;
    
    heading.style.letterSpacing = `${20 + letter_scape * 3}px`;

    heading.style.opacity = `${1 - letter_scape/140}`;
})

const Banner = () => {
  return (
    <div id="banner">
      <img id="banner-bg" src="/assets/hero-img.jpg" alt="hero-img" />

      <div id="about-banner">
        
        <h1 className="heading">SHARK <br/> TANK</h1>
        <h2 className="details"> <img src="/assets/calandar.svg" alt="calandar" /> 11:00 AM, 15 Sep 2023</h2>
        <h2 className="details"> <img src="/assets/location.svg" alt="location" /> BVS Block Auditorium</h2>

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
