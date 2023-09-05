import React, { useImperativeHandle } from "react";
import "./style.css";

window.addEventListener("scroll", () => {
    const rulesSec = document.querySelector("#rules-sec");
    const rulesSecPos = rulesSec.offsetTop;
    const scrolled = window.scrollY;
    const iheight = window.innerHeight;

    const img = document.querySelector("#rules-bg");

    if(rulesSecPos - window.scrollY < window.innerHeight){
        img.style.opacity = `${0.4 - scrolled * 0.0007}`;
        img.style.transform = `translateY(${-scrolled}px)`;
        img.style.filter = `blur(${scrolled * 0.01}px)`;
    }

    if(rulesSecPos - window.scrollY + iheight/4 < window.innerHeight){
        document.querySelector("#rules").classList.remove("transform-down");
    }
    else{
        document.querySelector("#rules").classList.add("transform-down");
    }
})

const Rules = () => {

    return (
    <div id="rules-sec">
        <img src="/assets/rules.jpg" id="rules-bg" alt="" />

        <ul id="rules" className="transform-down">
            <h1>RULES:</h1>

            <li>
                <h3>Round 1 : Pitch Desk Submission</h3>
                <p>Problem Statement: Clearly define the problem your idea addresses, backed by data or evidence Suggested</p>
                <p>Solution: Articulate your innovative solution and explain how it tackles the identified problem Competitors</p>
                <p>USP: Identify competitors and highlight your idea's unique selling points</p>
                <p>Revenue Model & Market Size: Detail your revenue generation strategy and showcase the market's potential</p>
            </li>

            <li>
                <h3>Round 2 : Business Model Canvas Presentation</h3>
                <p>Overview: Shortlisted Teams from Round 1 will advance to the next stage, where they'll provide a comprehensive Business Model Canvas that delves deeper into their business concepts</p>
                <p>Introduce your team members, their roles, and their relevance to the idea and why they can do it best</p>
            </li>
        </ul>
    </div>);
}

export default Rules;
