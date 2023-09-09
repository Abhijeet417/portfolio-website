import React from 'react';
import './All styles/header.css';
import ProfileImage from './All images/image.png'

function Header() {
  return (
    <header className=" header-outer">
      <div class = "header row">
        <div className="col-md-6 column column-left">
       
        <div className='shine'>
           <p >Hey there,</p>
        </div> 
        <h1 class="heading">I'm <span style={{color : "#665be5"}}>Abhijeet Singh</span></h1>
        <p class="tagline">I am a Web Developer</p>
        <div className="buttons">
         <button type="button" class="btn">Download Resume</button>
        </div>
      </div>
      <div className="col-md-6 column column-right">
        <img src={ProfileImage} class="profile slide-in-image" alt="Yourself" />
      </div>
      </div>
    </header>
  );
}

export default Header;
