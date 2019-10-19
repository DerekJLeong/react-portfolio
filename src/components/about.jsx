import React, { Component } from "react";
import "./about.css";
import placeholder from "./images/placeholder.png";
import ScrollableAnchor from "react-scrollable-anchor";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

class About extends Component {
   render() {
      return (
         <section className="about">
            <ScrollableAnchor id={"about"}>
               <span />
            </ScrollableAnchor>

            <Slide left>
               <h1>About</h1>
            </Slide>

            <Fade left>
               <div className="imgDiv">
                  <img
                     src={placeholder}
                     className="placeholder"
                     alt="placeholder"
                  />
               </div>

               <h2>Hi, my name is Derek and I’m a Front End Developer.</h2>
            </Fade>
            <Fade top>
               <p>
                  With a long standing love for programming and technology, my
                  work truly is my passion.
               </p>
               <p>
                  Backed by over 4 years of programming and computer science
                  education, as well as completion of Udacity's Front End
                  Nanodegree Program. I possess knowledge of both, modern
                  techniques and industry standards. You can find me improving
                  my development abilities in my free time.
               </p>
               <p>
                  I'm always looking for an opportunity to put the proof in the
                  pudding. Currently located in Los Angles, CA. I am available
                  for work both remote and on site. Let's bring your ideas to
                  life!
               </p>
            </Fade>
            <Slide left>
               <h2 className="colored">There is always more to be learned.</h2>
            </Slide>
         </section>
      );
   }
}

export default About;
