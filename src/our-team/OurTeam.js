import React from "react";
import './style.css';

const data = [
    ["Tushar Chaudhary", "Tushar Chaudhary.jpeg"],
    ["Chirag Gandherva", "Chirag Gandherva.jpeg"],
    ["Paras Goel", "Paras Goel.jpeg"],
    ["Rakesh Negi", "Rakesh Negi.jpeg"],
    ["Shaksham Kharbanda", "Shaksham Kharbanda.jpeg"],
    ["Teevra Bhandari", "Teevra Bhandari.jpeg"],
    ["Riya Bhatt", "Riya Bhatt.jpeg"],
    ["Akansha Gupta", "user.svg"],
    ["Amaresh Muralidhar", "user.svg"],
    ["Jagdish Pal", "user.svg"],
];

const TeamMembers = ({Name, Path}) => {
    return <li className="team-member">
        <img className="team-member-pic" src={`assets/team-pics/${Path}`} alt="team-memb"/>
        <div className="team-member-name">
            {Name}
        </div>
    </li>
}

const OurTeam = () => {
    return <React.Fragment>
        <div id="team"></div>
        <div id="team-list">
            <h1 id="team-heading">Our Team Members</h1>
            {
            data.map((items, index) => {
                return <TeamMembers key={index} Name={items[0]} Path={items[1]}></TeamMembers>
            })
        }
        </div>
    </React.Fragment>
}

export default OurTeam;
