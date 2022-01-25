import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Profile from "./Profile";
import "./Projects.css";
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
                      <img src="personal_site/images/site1.png"  alt='' />

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
                  <img src="personal_site/images/site2.png"  alt='' />

                  </a>
                </div>
                    </div>
                </div>
                
                <div className="row mt-5">
                    <div className="col-12">
                    <div className=" projects project-3">
                  <p>Google Clone Library</p>
                  <span>January, 2022</span>
                  <a href="https://clone-f0637.web.app" alt=''>
                  <img src="personal_site/images/site3.png" />

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
