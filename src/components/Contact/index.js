import "../../index.css"
import emailPic from "../../assets/images/email.png"
import phonePic from "../../assets/images/phone.png"
import React from 'react';


const Contact = (props) => {
  return (
    <>
      <h2 id="ContactHeader">Contact Me</h2>
      <address className="contactMe">
        <div className="contactPage">
          <h1>Phone</h1>
          <a href="tel:+15174883919" target="_blank" rel="noreferrer" id="phone" className="contactInfo">
            <img src={ phonePic } alt="phone"/>
            (517) 488-3919
          </a>
        </div>
        <div className="contactPage">
          <h1>Email</h1>
          <a href="mailto:bortkyle18@gmail.com" target="_blank" rel="noreferrer" id="email" className="contactInfo">
            <img src={ emailPic } alt="email"/>
            bortkyle18@gmail.com
          </a>
        </div>
      </address>
    </>
  )
}

export default Contact