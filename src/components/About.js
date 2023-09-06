// src/components/About.js
import React from 'react';
import './All styles/about.css'
import img from './All images/image2.png'
function About() {
  return (
    <section className="about">
      <div className="section-left">
        <img src={img} className='aboutImg' alt="Yourself" />
      </div>
      <div className="aboutMe section-right lifted-section">
        <h2 className="shaded-h1">More about me</h2>
         <ul className="passion-list" >
          <li data-text="My">My development passion is driven by a relentless desire to innovate<spam> ;</spam></li>
          <li data-text="Full">I try to stay at the forefront of technology<spam> ;</spam></li>
          <li data-text="Stack">Coding with Coffee<spam> :</spam> Dreaming in JavaScript<spam> ;</spam></li>
        </ul>
       </div>
    </section>
  );
}

export default About;
