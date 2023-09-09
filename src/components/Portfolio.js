// src/components/Portfolio.js
import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
// import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';

function Portfolio() {
  return (
    <div className="portfolio" style={{backgroundColor : "#272829",margin:"0 0 0 0"}}>
      <Header />
      <About />
      <Projects />
      <Skills />
      {/* <Resume /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default Portfolio;
