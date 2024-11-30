import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';
import Headshot from "./photos/Headshot.jpeg";
function App() {
  return (
    <div className="App">
      
      <div id="title">
        <h1>Danniecia Gray's Portfolio</h1>
      </div>
      <div className="Header">
        <img 
          src = {Headshot} 
          alt = "Headshot" 
          style={{width:"200px",height:"auto",padding:10,borderRadius:100}}
        />
        
        <div id = "links">
          <a href="https://www.linkedin.com/in/danniecia-gray-b129b9290/" > LinkedIn</a>
          <a href="https://github.com/DannieciaGray">  GitHub</a>

        </div>

          
        
      </div>
    

      
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

export default App;
