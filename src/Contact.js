import React from 'react';
import { NavLink } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>This is the Contact page where you can share details about yourself!</p>
    

      {/* Taskbar */}
      <div className="taskbar">
        <NavLink 
          className="taskbar-item" 
          to="/" 
          end 
          activeClassName="active"
        >
          Home
        </NavLink>
        <NavLink 
          className="taskbar-item" 
          to="/about" 
          activeClassName="active"
        >
          About
        </NavLink>
        <NavLink 
          className="taskbar-item" 
          to="/projects" 
          activeClassName="active"
        >
          Projects
        </NavLink>
        <NavLink 
          className="taskbar-item" 
          to="/contact" 
          activeClassName="active"
        >
          Contact
        </NavLink>

      </div>
    </div>
  );
}

export default Contact;
