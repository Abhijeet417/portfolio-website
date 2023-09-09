// src/components/About.js
import React from 'react';
import './All styles/about.css'
import img from './All images/image2.png'
function About() {
  return (
    <section className=" about">
      <div className=" section-left">
        <img src={img} className='aboutImg' alt="Yourself" />
      </div>
      <div className=" aboutMe section-right lifted-section">
        <h2 className="shaded-h1">More about me</h2>
         <p className="passion-list" >
          Hello, I'm a web developer and UI/UX designer. I'm passionate about crafting beautiful digital experiences that solve real problems.I'm committed to learning and growing, and I love collaborating with others to bring ideas to life. Let's create impactful digital solutions together!
           </p>
       </div>
    </section>
  );
}

export default About;
