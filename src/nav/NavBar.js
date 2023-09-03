import React from "react";
import "./style.css";

const toggleMenu = () => {
    const menu = document.querySelector(".nav-list");
    menu.classList.toggle("display-menu");
}

const NavBar = () => {
    const values = ["Home", "About", "Schedule", "Tracks", "Judges", "Team", "FAQ'S"];

    return <nav className="nav-bar">
        <div id="hamburger-menu" onClick={()=>{toggleMenu()}}>
            <img src="assets/ham.svg" alt="menu" />
        </div>

        <div id="logo">
            <img src="" alt="" />
        </div>

        <ul className="nav-list">{
            values.map((item, idx) => {
                return <li className="nav-item" key={idx}>
                    <a href="#" className="nav-links">{item}</a>
                </li>
            })
        }
        </ul>
    </nav>
}

export default NavBar;
