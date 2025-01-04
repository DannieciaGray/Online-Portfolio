
import './App.css';
import { NavLink } from 'react-router-dom';
import Headshot from "./photos/Headshot.jpeg";
function App() {
  return (
    <div className="App">
      {/* Title Section */}
      <div id="title">
        <h1>Danniecia Gray's Portfolio</h1>
      </div>
      <div className="Header">
        <img 
          src = {Headshot} 
          alt = "Headshot" 
          style={{width:"200px",height:"auto",padding:10,borderRadius:100}}
        />
        <h2>Hi, I'm Danniecia Gray!</h2>
        <p>I'm a passionate developer and designer, excited to create impactful solutions through technology.</p>

        
        <div id = "links">
        <a
          href="https://www.linkedin.com/in/danniecia-gray-b129b9290/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn linkedin-btn"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/DannieciaGray"
          target="_blank"
          rel="noopener noreferrer"
          className="btn github-btn"
        >
          GitHub
        </a>
        </div>

      </div>
    	{/* Experience/Job Section*/} 

			<div className="experience-container">
							<h1>MY WORK EXPERIENCE</h1>
							<p>
								<b>WordPress Editor</b>
								<p></p>
								<b>Academic Tutor</b>
								<p></p>
								<b>Classroom Technology Student Assistant</b>
								
							</p>
			</div>
      
      {/* Taskbar */}
      <div className="taskbar">
				<NavLink
					className="taskbar-item"
					to="/"
					end
				>
					Home
				</NavLink>
				<NavLink
					className="taskbar-item"
					to="/about"
				>
					About
				</NavLink>
				<NavLink
					className="taskbar-item"
					to="/projects"
				>
					Projects
				</NavLink>
				<NavLink
					className="taskbar-item"
					to="/contact"
				>
					Contact
				</NavLink>
			</div>

    </div>

    


  );
}

export default App;
