import React from "react";

import "./About.css";
function About(props) {
  return (
    <>
      <section className="body-right col-8">
        <div className="about-title">
          <p>{props.title}</p>
          <span>{props.titleAlt}</span>
          <hr></hr>
        </div>
        <div className="about-section">
        <div className="about-infos">
          <div className="intro">
            <p>{props.intro}</p>
            <span>{props.introAlt}</span>
          </div>
          </div>

          <div className="projects">
            {props.projects}
          </div>
          <div className="currently">
            <p>{props.currently}</p>
            <span>{props.currentlyAlt}</span>
          </div>

          {!props.onShow && (
            <div className="some-history">
              <p>SOME HISTORY</p>
              <ul>
                <li>
                  <span>
                    My parents put a computer in my bedroom in 2005 when I was
                    3. My favorite games
                    were Call of Duty, Need for speed, and Assassin's Creed. It had
                    a mechanical keyboard and a turbo button. To this day, I
                    still don't know what pressing the turbo button really did.
                  </span>
                </li>

                <li>
                  <span>
                  Before enrolling in the course, I had some theoretical and practical experience with Java. But for some reason it was impossible to go further. It was as if something was missing.
                  </span>
                </li>

                <li>
                  <span>
                    In the autumn of 2021, I registered EA CAMP. The lesson methodology, syllabus,
                    teacher, mentor are incredible. That's why thank you so much Mr.Elshad for these :)
                  </span>
                </li>

                <li>
                  <span>
                  After 1 month, I prepared my first small site. Although the codes were horrible, at least there was a result. I can't describe the joy I felt at that moment in words.
                  </span>
                </li>

                <li>
                  <span>
                  Two months later, we finished the Frontend Fundamentals section and prepared the final project. As a result of sleepless nights, we were able to do a wonderful job. For this, I thank my teammates for their help.
                  </span>
                </li>

                <li>
                  <span>
                  I am currently learning React. Although there are some difficulties, this is not an obstacle. Therefore, continue to learn :)
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>
        
      </section>
    </>
  );
}

export default About;
