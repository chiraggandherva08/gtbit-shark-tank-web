import React from "react";
import "./style.css";

window.addEventListener("scroll", () => {
    const heading = document.querySelector(".heading");
    const img = document.querySelector("#banner-bg");

    const scrolled_height = window.scrollY;

    img.style.transform = `translateY(${scrolled_height * (-1)}px)`;
    img.style.filter = `blur(${scrolled_height * 0.01}px)`;
    img.style.opacity = `${0.4 - 0.002 * scrolled_height}`;
    
    heading.style.letterSpacing = `${20 + scrolled_height}px`;
    heading.style.opacity = `${1 - scrolled_height/200}`;
})

const Banner = () => {
  return (
    <div id="banner">
      <section id="home"></section>
      <img id="banner-bg" src="/assets/hero-img.jpg" alt="hero-img" />

      <div id="about-banner">
        
        <h1 className="heading">SHARK <br/> TANK</h1>
        <h2 className="details"> <img src="/assets/calandar.svg" alt="calandar" /> 12:00 PM to 2:30 PM, 15 Sep 2023</h2>
        <h2 className="details"> <img src="/assets/location.svg" alt="location" /> Computer Lab, Admin Block</h2>

        <div id="banner-links">
          <a id="contact-us-btn" href="#contact-us">
            Contact us
          </a>
        </div>

        <div id="social-media">
          <a href="https://instagram.com/techfest_sanchaar_official?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer">
            <img src="/assets/social/instagram.svg" alt="" />
          </a>

          <a href="https://chat.whatsapp.com/JAULDWtOYOf4iS0YbNbn6O" target="_blank" rel="noreferrer">
            <img src="/assets/social/whatsaap.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
