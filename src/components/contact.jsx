import React, { Component } from "react";
import "./contact.css";
import ScrollableAnchor from "react-scrollable-anchor";
import Logo from "./images/logo.png";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

class Contact extends Component {
   render() {
      return (
         <section className="contact">
            <Slide right>
               <h1>Contact</h1>
            </Slide>

            <ScrollableAnchor id={"contact"}>
               <span />
            </ScrollableAnchor>

            <Fade top>
               <p>
                  Interested in working with me?
                  <br />
                  Need help or have any questions?
                  <br />
                  Just want to talk tech?
                  <br />
               </p>
               <p>
                  Below are various methods that you can use to connect with me,
                  including a PDF download for my resume. I look forward to
                  hearing from you, cheers!
               </p>
            </Fade>
            <Fade right>
               <ul className="contactList">
                  <a
                     href="mailto:derekjleong@gmail.com"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <li className="contactHover">
                        <img src={require("./images/email.svg")} alt="Email" />
                     </li>
                  </a>
                  <a
                     href="https://www.linkedin.com/in/derekjleong/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <li className="contactHover">
                        <img
                           src={require("./images/linkedin.svg")}
                           alt="LinkedIn"
                        />
                     </li>
                  </a>
                  <a
                     href="https://github.com/DerekJLeong"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <li className="contactHover">
                        <img
                           src={require("./images/github.svg")}
                           alt="GitHub"
                        />
                     </li>
                  </a>
                  <a href="https://docs.google.com/document/d/1zH9601JKAFW1512EIZJutaz-BrKGVW34_Tdfo0FsOZE/edit?usp=sharing">
                     <li className="contactHover">
                        <img
                           src={require("./images/resume.svg")}
                           alt="Resume PDF"
                        />
                     </li>
                  </a>
               </ul>
            </Fade>
            <Fade bottom>
               <img src={Logo} alt="DJL logo" />
            </Fade>
         </section>
      );
   }
}

export default Contact;
