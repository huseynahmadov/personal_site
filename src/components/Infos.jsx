import { useState } from "react";
import React from "react";
import Profile from "./Profile";
import "./Infos.css";
import About from "./About";

function Infos() {

  const [visible, setVisible] = useState(true);
  

  const onShowHandler = () => {
      setVisible(false);

  };
  
  return (
    <>
      <section className="body-section">
        <section className="row body-section-row">
          <Profile />

          <About
            title="ABOUT THIS SITE"
            titleAlt="A BEAUTIFUL, RESPONSIVE, STATICALLY-GENERATED, REACT APPLICATION WRITTEN WITH MODERN JAVASCRIPT."
            introAlt="Welcome to my website. Please feel free to read more about me, or you can check out my resume, projects, or contact me."
            currentlyAlt={<div>
              <span>Source available <a href="https://github.com/huseynahmadov/personal_site" target='_blank'>here</a></span>
            </div>} onShow={onShowHandler}
          />
        </section>
      </section>
    </>
  );
}

export default Infos;