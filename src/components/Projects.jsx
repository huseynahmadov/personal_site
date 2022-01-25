import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Profile from "./Profile";
import "./Projects.css";
import site1 from "./site1.png";
import site2 from "./site2.png";
import site3 from "./site3.png";
function Projects(props) {
  return (
    <>
      <Navbar />
      <section className="body-section">
        <section className="row body-section-row">
          <Profile />
          <About
            onShow={!props.onShow}
            title="PROJECTS"
            titleAlt={`A SELECTION OF PROJECTS THAT I'M NOT TOO ASHAMED OF`}
            projects={
              <div className="project-title">
                <div className="row">
                  <div className="col-12">
                    <div className="projects project-1">
                      <p>Book Store Library</p>
                      <span>December, 2021</span>
                      <a href="https://huseynahmadov.github.io/book-store/">
                        <img src={site1} alt="" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-12">
                    <div className=" projects project-2">
                      <p>Disney+ App</p>
                      <span>January, 2022</span>
                      <a href="https://disneyplus-clone-ae3d6.web.app">
                        <img src={site2} alt="" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-12">
                    <div className=" projects project-3">
                      <p>Google Clone Library</p>
                      <span>January, 2022</span>
                      <a href="https://clone-f0637.web.app" alt="">
                        <img src={site3} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </section>
      </section>
    </>
  );
}

export default Projects;
