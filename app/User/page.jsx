"use client";
import React, { useState, useEffect } from "react";
import "./user.css"; 

export default function User() {
  const [userData, setUserData] = useState(null);
  const [userId, setUserId] = useState(1);
  const [allUsernames, setAllUsernames] = useState([]);


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUserData(data));
  }, [userId]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setAllUsernames(data.map(u => u.username)));
  }, []);

  return (
    <div className="user-container">
      <h1>This is my User Page</h1>
      <img
        src="https://i.pinimg.com/736x/25/53/6e/25536e8e5da1ef9712658b5525375ca8.jpg"
        alt="User"
      />

      <div className="user-controls">
        <input
          type="number"
          value={userId}
          onChange={e => setUserId(Number(e.target.value))}
          min="1"
          max="10"
        />
        <button onClick={() => userId < 10 && setUserId(userId + 1)}>+</button>
        <button onClick={() => userId > 1 && setUserId(userId - 1)}>-</button>
        <button onClick={() => setUserId(1)}>Reset</button>
      </div>

      {userData && (
        <div className="user-data">
          <h2>Name: {userData.name}</h2>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <p>Website: {userData.website}</p>
        </div>
      )}

      <h3>All Usernames:</h3>
      <ul className="user-list">
        {allUsernames.map((u, i) => (
          <ol key={i}>{u}</ol>
        ))}
      </ul>
    </div>
  );
}
