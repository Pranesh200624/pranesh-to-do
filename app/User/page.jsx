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
      <h1>This is User Page</h1>
      <img
        src="data:image/jpeg;base64,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"
        alt="User"
      />

      <div className="user-controls">
        <input
          type="number"
          value={userId}
          onChange={e => setUserId(Number(e.target.value))}
          min="1"
          max="10"
        /> <br /><br />
        <button onClick={() => userId > 1 && setUserId(userId - 1)}>--</button> 

        <button onClick={() => userId < 10 && setUserId(userId + 1)}>+</button><br /><br />
        <button onClick={() => setUserId(1)}>Reset</button> <br /><br />
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
