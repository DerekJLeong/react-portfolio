import React, { Component } from "react";
import "./navbar.css";
import smallIcon from "./images/downloadSmall.svg";
import Fade from "react-reveal/Fade";

class NavBar extends Component {
   constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      this.state = {
         isNavOpen: false,
         width: 0
      };
   }

   componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
   }

   componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
   }

   updateWindowDimensions() {
      this.setState({ width: window.innerWidth });
   }

   handleClick() {
      this.setState({
         isNavOpen: !this.state.isNavOpen
      });
   }

   render() {
      const isNavOpen = this.state.isNavOpen;
      const viewWidth = this.state.width;

      let showToggle;

      // showToggle = isNavOpen ? "show" : null;
      showToggle = viewWidth >= 768 ? "show" : isNavOpen ? "show" : null;

      return (
         <React.Fragment>
            <Fade top>
               <div
                  className={
                     this.state.isNavOpen
                        ? "navButton closed"
                        : "navButton opened"
                  }
                  onClick={this.handleClick}
               />
            </Fade>
            <Fade right cascade>
               <nav className={showToggle}>
                  <a href="#about" onClick={this.handleClick}>
                     About
                  </a>
                  <a href="#projects" onClick={this.handleClick}>
                     Projects
                  </a>
                  <a href="#skills" onClick={this.handleClick}>
                     Skills
                  </a>
                  <a href="#contact" onClick={this.handleClick}>
                     Contact
                  </a>
                  <a
                     href="https://docs.google.com/document/d/1zH9601JKAFW1512EIZJutaz-BrKGVW34_Tdfo0FsOZE/edit?usp=sharing"
                     onClick={this.handleClick}
                  >
                     Resume
                     <img src={smallIcon} alt="Small download icon" />
                  </a>
               </nav>
            </Fade>
         </React.Fragment>
      );
   }
}

export default NavBar;
