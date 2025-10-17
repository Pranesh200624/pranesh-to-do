"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask, clearAll } from "./Todolistslice";
import './Todolist.css';

function Todolist() {
  const [task, setTask] = useState("");
  const [storedTask, setStoredTask] = useState("");
  const tasks = useSelector((state) => state.todolist.list);
  const dispatch = useDispatch();

  const handleStore = () => {
    if (task.trim() !== "") {
      setStoredTask(task);
      console.log("Stored Task:", task);
      setTask("");
    }
  };

  return (
    <div className="todolist-container">
      <h1>This is To-Do Page</h1> <br />
      <input 
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      /> <br /><br />

      <div className="todolist-buttons">
        <button onClick={() => { 
          if(task.trim() !== "") { 
            dispatch(addTask(task)); 
            setTask(""); 
          } 
        }}>Add Task</button> <br /><br />

        <button onClick={handleStore}>Store</button>

        <button onClick={() => dispatch(clearAll())}>Clear All</button>
      </div> <br /><br />

      {storedTask && (
        <p>Temporarily Stored Task: <strong>{storedTask}</strong></p>
      )} 

      <h2>Tasks ({tasks.length})</h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => dispatch(removeTask(item))}>Remove</button> <br /><br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
