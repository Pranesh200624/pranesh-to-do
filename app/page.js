import React from "react";
import './Home/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      
      <img 
        src="https://i.pinimg.com/736x/25/53/6e/25536e8e5da1ef9712658b5525375ca8.jpg" 
        alt="Home" 
        className="home-image"
      />

      <p className="home-description">
        This is your personal space where you can explore tasks, manage goals, 
        and stay organized. Let's make every day productive and meaningful!
      </p>

      <div className="home-buttons">
        <button>Explore Tasks</button>
        <button>Create New Task</button>
        <button>Visit Profile</button>
      </div>

      <section className="home-section">
        <h2>Why Use This App?</h2>
        <ul>
          <li>✅ Stay organized with a clean to-do list</li>
          <li>✅ Store important notes and ideas</li>
          <li>✅ Track your progress every day</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
