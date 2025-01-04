import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="App">
      {/* Title Section */}
      <div id="title">
        <h1>About Me</h1>
      </div>

      {/* About Content */}
      <div className="about-container">
        <h1>Hi, I'm Danniecia Gray!</h1>
        <p>
          I'm a Computer Science sophomore at Georgia State University, passionate about creating
          innovative and impactful tech solutions. My interests include <b>UI/UX design</b>, 
          <b> Web Development</b>, and <b>AR/VR technology</b>.
        </p>

        {/* Skills Section */}
        <div className="skills-section">
          <h2>Technical Skills</h2>
          <ul>
            <li>React.js</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>HTML & CSS</li>
            <li>Firebase</li>
            <li>Figma</li>
          </ul>
        </div>

        {/* Fun Facts Section */}
        <div className="fun-facts-section">
          <h2>Fun Facts</h2>
          <ul>
            <li>I’m a stress baker—oatmeal raisin cookies are my favorite!</li>
            <li>I was born and raised in Jamaica!</li>
            <li>I’ve competed in 2 hackathons (placing in both), and love collaborating on innovative projects.</li>
          </ul>
        </div>
      </div>

      {/* Taskbar */}
      <div className="taskbar">
        <NavLink className="taskbar-item" to="/" end>
          Home
        </NavLink>
        <NavLink className="taskbar-item" to="/about">
          About
        </NavLink>
        <NavLink className="taskbar-item" to="/projects">
          Projects
        </NavLink>
        <NavLink className="taskbar-item" to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default About;
