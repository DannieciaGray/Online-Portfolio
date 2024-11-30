import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
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
        <Link className="taskbar-item" to="/">Home</Link>
        <Link className="taskbar-item" to="/about">About</Link>
        <Link className="taskbar-item" to="/projects">Projects</Link>
        <Link className="taskbar-item" to="/contact">Contact</Link>

      </div>
    </div>

    


  );
}

export default App;
