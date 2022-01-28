import { useState } from "react";
import React from "react";
import Profile from "./Profile";
import "./Infos.css";
import About from "./About";
import Grid from "@mui/material/Grid";
function Infos() {

  const [visible, setVisible] = useState(true);
  
  console.log(visible);
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
              <span>Source available <a href="https://github.com/huseynahmadov/personal_site" target='_blank' rel="noreferrer">here</a></span>
            </div>} onShow={onShowHandler}
          />
        </section>
      </section>
    </>
  );
}

export default Infos;