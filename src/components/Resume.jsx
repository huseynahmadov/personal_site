import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Profile from "./Profile";
import './Resume.css'
function Resume(props) {
  return (
    <>
      <Navbar />
      <section className="body-section">
        <section className="row body-section-row">
          <Profile />
          <About
            title="RESUME"
            titleAlt={
                <div className="resume-links">
                <div className="education">

                <a href="#">
                  <span>EDUCATION</span>
                 </a>
                 </div>

                 <div className="skills">

                <a href="#">
                  <span>SKILLS</span>
                 </a>
                 </div>
                </div>
            }
            intro='EDUCATION' introAlt={<ul>
                <li>Azerbaijan State and Oil Industry University (2019-2023)</li>
                <li>EA CAMP Fullstack MERN Course 2021-Present</li>
            </ul>}
            currently='SKILLS' currentlyAlt={<div style={{display:"flex", justifyContent:"space-around"}}>

            <ul>
                <li>HTML 5</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Bootstrap 4,5</li>
                <li>jQuery</li>
                </ul>
                <ul>
                <li>JSON</li>
                <li>AJAX</li>
                <li>API</li>
                <li>Firebase</li>
                <li>React JS</li>
            </ul>
            </div>
            }
            onShow={!props.onShow}
          />
        </section>
      </section>
    </>
  );
}

export default Resume;
