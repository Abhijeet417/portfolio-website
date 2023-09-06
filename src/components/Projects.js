// src/components/Projects.js
import React from 'react';
import './All styles/project.css'
import image1 from './All images/Whatsapp Web.jpg'
import image2 from './All images/Voluntrix.jpg'

function Projects() {
  return (
     <section className="projects" style={{margin: '2rem 0 5rem 0'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 leftSection lifted-section" style={{color : 'white'}}>
            <h1 >My projects</h1>
            <p>I'm making more projects</p>
          </div>
          <div className="col-md-6">
            <div className='row' style={{paddingLeft : "1.2rem"}}>
                   <div className='col-md-6'>
                         <div class="card" style={{width: '15rem'}}>
                          <img src={image1} class="card-img-top" alt="Project 1" width="280" height="230"/>
                          <div class="card-body">
                            <a href="https://github.com/Abhijeet417/Whatsapp-Clone-Web" class="card-link">Whatsapp-Web Clone</a>
                          </div>
                        </div>
                   </div>
                   <div className='col-md-6'>
                          <div class="card" style={{width: '15rem',}}>
                          <img src={image2} class="card-img-top" alt="Project 1"width="280" height="230"/>
                          <div class="card-body">
                            <a href="https://github.com/Abhijeet417/Voluntrix-Web" class="card-link">Voluntrix-Web App</a>
                          </div>
                        </div>
                   </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

     