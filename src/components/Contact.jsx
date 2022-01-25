import React from 'react';
import About from './About';
import Navbar from './Navbar';
import Profile from './Profile';
function Contact(props) {
  return <>
    <Navbar />
  <section className="body-section">
  <section className="row body-section-row">
    <Profile />
    <About title='CONTACT ME' introAlt='Feel free to get in touch. You can email me at:' currentlyAlt={<a href='mailto:hahmedov20@gmail.com' style={{textDecoration:"none", color:"inherit", borderBottom:"1px dotted red"}} >hahmedov20@gmail.com</a>}  onShow={!props.onShow}/>
    </section>
    </section>
  </>;
}

export default Contact;
