import React, { Component } from "react";
import "./header.css";
import VideoMP4 from "./images/headerVideo.mp4";
import VideoWEBM from "./images/headerVideo.webm";
import VideoOGV from "./images/headerVideo.ogv";

class Header extends Component {
   render() {
      return (
         <header>
            <h3>Derek J Leong</h3>
            <h1>Front End Developer</h1>
            <h2>
               Ideas are nothing without action, let's bring yours to life!
            </h2>
            <a href="#projects">
               <h3 className="viewPortfolio">View Projects</h3>
               <div className="downArrow" />
            </a>
            <video
               autoPlay
               loop
               muted
               id="headerVideo"
               poster="images/headerVideoPoster.jpg"
            >
               <source src={VideoWEBM} type="video/webm" />
               <source src={VideoMP4} type="video/mp4" />
               <source src={VideoOGV} type="video/ogv" />
            </video>
         </header>
      );
   }
}

export default Header;
