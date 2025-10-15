"use client"
import React from "react";
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <img 
        src="https://i.pinimg.com/736x/65/ee/ff/65eeff4c209bf9c7badcd8a688136363.jpg" 
        alt="Contact" 
      />

      <p className="contact-description">
        Have questions? We’d love to hear from you! Reach out to us anytime.
      </p>

      <div className="contact-info">
        <p><strong>Email:</strong> info@examplemail.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> 123, Dream Street, Chennai, India</p>
      </div>

      <div className="contact-social">
        <h3>Follow Us</h3>
        <ul>
          <li>Instagram: @example_page</li>
          <li>Facebook: /examplefb</li>
          <li>Twitter: @example_tweet</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
