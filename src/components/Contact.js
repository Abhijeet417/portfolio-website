// src/components/Contact.js
import React from 'react';
import './All styles/Contact.css'

function Contact() {
  return (
    <section className='contact'>
      <h2 className='contact-heading'>Let's Talk</h2>
      <div className='row' style={{margin : "0 1.2rem"}}>
           <div className='col-md-4 contacts'>
               <div className='contact-elements'>
                  <article class="contact_option"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="contact_option-icon" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><h4>Email</h4><h5>abdv417@gmail.com</h5><a href="mailto:abdv417@gmail.com">Send a message</a></article>
                </div>
           </div>
           <div className='col-md-4 contacts' > 
                <div className='contact-elements'>
                   <article class="contact_option"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="contact_option-icon" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                       </svg><h4>Call Me</h4><h5>+91 8448606819</h5><a href="https://api.whatsapp.com/send?phone=+918448606819&amp;text=Hello%20there!">Send a message</a></article>
                </div>
           </div>
           <div className='col-md-4 contacts'>
                <div className='contact-elements'>
                    <article class="contact_option"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="contact_option-icon" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><g id="Location_On"><g><path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"></path><path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"></path></g></g></svg><h4>Location</h4><h5>New Delhi-India-110008</h5></article>
               </div>
           </div>
      </div>
    </section>
  );
}

export default Contact;
