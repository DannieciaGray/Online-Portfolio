import React from 'react';
import './App.css'; // Taskbar design 

const Taskbar = () => {
  return (
    <div className="taskbar">
      <div className="taskbar-item">Home</div>
      <div className="taskbar-item">About</div>
      <div className="taskbar-item">Projects</div>
      <div className="taskbar-item">Contact</div>
    </div>
  );
};

export default Taskbar;