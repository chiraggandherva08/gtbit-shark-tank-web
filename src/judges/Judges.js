import React from "react";

const Judges = () => {
    return <React.Fragment>
        <div id="judges"></div>
        <h1 id="team-heading">Our Judges</h1>
        <ul id="judges-list">
            <li className="team-member">
                <img className="team-member-pic" src={`assets/team-pics/${"P.S. Bedi"}.png`} alt="team-memb"/>
                <div className="team-member-name">
                    Mr. P.S. Bedi
                </div>
            </li>
            <li className="team-member">
                <img className="team-member-pic" src={`assets/team-pics/${"Simarpreet Singh"}.png`} alt="team-memb"/>
                <div className="team-member-name">
                    Dr. Simarpreet Singh
                </div>
            </li>
            <li className="team-member">
                <img className="team-member-pic-user" src={`assets/team-pics/${"user.svg"}`} alt="team-memb"/>
                <div className="team-member-name">
                    Dr. Amandeep Kaur
                </div>
            </li>
        </ul>
    </React.Fragment>;
}
export default Judges;