import React from "react";
import "./style.css";

const toggleMenu = () => {
    const menu = document.querySelector(".nav-list");
    menu.classList.toggle("display-menu");
}

const NavBar = () => {
    const values = ["Home", "About", "Schedule", "Tracks", "Judges", "Contact-us", "FAQ'S"];

    const change_active = (idx) => {
        const menuItem = document.querySelectorAll(".nav-links");
        
        for(let i = 0; i < menuItem.length; i++) {
            if(i == idx){
                menuItem[i].classList.add("white-menu");
            }
            else {
                menuItem[i].classList.remove("white-menu");
            }
        }
    }

    return <nav className="nav-bar">
        <div id="hamburger-menu" onClick={()=>{toggleMenu()}}>
            <img src="assets/ham.svg" alt="menu" />
        </div>

        <div id="logo">
            <a href="/">
                <img src="/assets/logo.svg" alt="logo" />
            </a>
        </div>

        <ul className="nav-list">{
            values.map((item, idx) => {
                return <li className="nav-item" key={idx} onClick={() => {change_active(idx)}}>
                    <a href={`#${item.toLowerCase()}`} className="nav-links">{item}</a>
                </li>
            })
        }
        </ul>
    </nav>
}

export default NavBar;
