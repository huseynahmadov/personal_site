import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import pp from './pp.png'
function Profile() {
  return (
    <>
      <section className="body-left col-3">
        <div className="profile-photo">
          <img src={pp} alt="Huseyn" />
        </div>
        <div className="profile-title">
          <span>Huseyn A'hmadov</span>
        </div>
        <div className="profile-email">
          <Link to="mailto:hahmedov20@gmail.com">hahmedov20@gmail.com</Link>
        </div>
        <hr></hr>
        <div className="profile-about">
          <p>ABOUT</p>
          <span>
          Hi. I'm 19 and currently student. I'm open to new innovations and love learning new technologies. Love programming :)
          </span>

          <div className="about-me-link">
            <Link to="/resume">LEARN MORE</Link>
          </div>
          <hr></hr>

          <div className="contact-links">
            <a href="https://github.com/huseynahmadov">
              <span className="fab fa-github"></span>
            </a>

            <a href="https://instagram.com/hus3.yn">
              <span className="fab fa-instagram"></span>
            </a>

            <a href="https://www.linkedin.com/in/huseyn-ahmadov-659102197/">
              <span className="fab fa-linkedin"></span>
            </a>

            <a href="mailto:hahmedov20@gmail.com">
              <span className="fas fa-envelope"></span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
