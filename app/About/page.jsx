"use client";
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1>This is About Page</h1> <br /><br />
      <img
        src="https://media.istockphoto.com/id/1221653457/photo/close-up-of-a-touchscreen-social-media-concept.jpg?s=612x612&w=0&k=20&c=thcgiLGWFoRNMrMiDXDGUGPy50i9jhXhiHSy-vokyqI="
        alt="About"
        className="about-image"
      /><br /> <br />
      <p className="about-message">
       "Welcome! We’re committed to providing top-quality solutions and services. Our team is innovative, dedicated, and always ready to assist.
      </p> <br />
      <p className="about-message">
        Our mission is to make technology simple, accessible, and enjoyable for everyone. We value trust, creativity, and excellence in all we do.
      </p><br />
      <p className="about-message">
        Have questions or feedback? Don’t hesitate to reach out — we’re here to help!"
      </p><br />
    </div>
  );
}

export default About;
