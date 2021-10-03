import React, { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

function ContactScreen() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className="contact" >
            <section id="contact" className={darkMode ? "bottom-container-dark" : "bottom-container"} >
                <div className="contact-me">
                    <h1><strong>Get In Touch</strong></h1>
                    <h3>Kindly contact me anytime.</h3>
                    <p><i className="fa fa-inbox"></i> yusuffhamzat.yh@gmail.com</p>
                    <p><i className="fa fa-phone"></i> +2347066350393</p>
                    <button className="btn" href="mailto:yusuffhamzat.yh@gmail.com">CONTACT ME</button>
                </div>
            </section>
        </div >
    );
}
export default ContactScreen;