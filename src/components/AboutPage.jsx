import React from "react";
import Profile from "./Profile";
import Navbar from "./Navbar";
import About from './About';
function AboutPage(props) {
    return <>
        <Navbar />
        <section className="body-section">
        <section className="row body-section-row">
        <Profile />
        <About title='ABOUT ME' titleAlt='(IN ABOUT 500 WORDS)' intro='INTRO' introAlt={`Hi. I'm 19 and currently student. I'm open to new innovations and love learning new technologies. Love programming :)`} onShow={props.onShow}/>

        </section>
        </section>
    </>;
}

export default AboutPage;