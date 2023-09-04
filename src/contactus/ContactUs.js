import React from "react";
import "./style.css";

const ContactUs = () => {
    return <React.Fragment>
        <h2 className="heading-contact">Contact Us</h2>
        <div id="contact-us">
            <div>
                <img src="/assets/contact.gif" alt="contact" />
            </div>
            <div>
                <input type="Email" name="email" id="email-contact-us" placeholder="Email"/>
                <input type="text" name="name" id="name-contact-us" placeholder="Full Name" />
                <input type="tel" name="phnumber" id="ph-contact-us" placeholder="Phone Number"/>
                <button id="send-mail">SEND</button>
            </div>
        </div>
    </React.Fragment>
}

export default ContactUs;
