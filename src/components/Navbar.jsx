// import React, {useState} from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// function Navbar(props) {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <header className="header-section">

//         <div className="header-name">
//             <Link to="/">
//             <span className="header-left">Huseyn A'hmadov</span>

//             </Link>
//       </div>
//         <div className="header-right">
//           <div className="close">
//           <div className={isOpen && classes["nav-active"]}></div>
//           </div>
//           <div className="header-links">
//             <div className="about-link" >
//               <Link to="/about" >About </Link>
//             </div>

//             <div className="resume-link">
//               <Link to="/resume">Resume </Link>
//             </div>

//             <div className="projects-link">
//               <Link to="/projects">Projects</Link>
//             </div>

//             <div className="contact-link">
//               <Link to="/contact">Contact </Link>
//             </div>

//             <div
//             className={`${classes.burger} ${isOpen && classes.toggle}`}
//             onClick={() => setIsOpen(!isOpen)}>
//               <div className={classes.line1}></div>
//               <div className={classes.line2}></div>
//               <div className={classes.line3}></div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <h1>
          <Link to="/">Huseyn Ahmadov</Link>
        </h1>
        <nav>
          <ul className={isOpen && classes["nav-active"]}>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/resume">RESUME</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
          <div
            className={`${classes.burger} ${isOpen && classes.toggle}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={classes.line1}></div>
            <div className={classes.line2}></div>
            <div className={classes.line3}></div>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;