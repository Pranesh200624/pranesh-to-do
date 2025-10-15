"use client";
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <img
        src="https://media.istockphoto.com/id/1400739452/vector/about-us-web-header-design-icon-interconnected-symbol-of-company-profile-corporate.jpg?s=612x612&w=0&k=20&c=-zgp-xnEqh8zBEjNajlPZmDF5PXuqlXVUu7RjBf_UGU="
        alt="About"
        className="about-image"
      />
      <p className="about-message">
        Welcome to our platform! We are passionate about delivering high-quality solutions and services
        to our customers. Our team is dedicated, innovative, and always eager to help.
      </p>
      <p className="about-message">
        Our mission is to make technology accessible and enjoyable for everyone. We value trust,
        creativity, and excellence in everything we do.
      </p>
      <p className="about-message">
        Feel free to reach out to us anytime — your feedback and questions are always welcome!
      </p>
    </div>
  );
}

export default About;
