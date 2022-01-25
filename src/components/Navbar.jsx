import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar(props) {
  
  return (
    <div>
      <header className="header-section">
        <div className="header-name">
            <Link to="/">
            <span className="header-left">Huseyn A'hmadov</span>

            </Link>
        </div>

        <div className="header-right">
          <div className="header-links">
            <div className="about-link" >
              <Link to="/about" >About </Link>
            </div>

            <div className="resume-link">
              <Link to="/resume">Resume </Link>
            </div>

            <div className="projects-link">
              <Link to="/projects">Projects</Link>
            </div>

           

            <div className="contact-link">
              <Link to="/contact">Contact </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
