import logo from './logo.svg';
import './App.css';
import Danniecia from "./vision board/Danniecia.jpeg";
function App() {
  return (
    <div className="App">
      
      <div id="title">
        <h1>Danniecia Gray's Portfolio</h1>
      </div>
      <div className="Header">
        <img 
          src = {Danniecia} 
          alt = "Danniecia" 
          style={{width:"200px",height:"auto",padding:10,borderRadius:100}}
        />
        
        <div id = "links">
          <a href="https://www.linkedin.com/in/danniecia-gray-b129b9290/" > LinkedIn</a>
          <a href="https://github.com/DannieciaGray">  GitHub</a>

        </div>

          
        
      </div>
    

      
      {/* Taskbar */}
      <div className="taskbar">
      <div className="taskbar-item">Home</div>
      <div className="taskbar-item">About</div>
      <div className="taskbar-item">Projects</div>
      <div className="taskbar-item">Contact</div>

    </div>
    </div>

    


  );
}

export default App;
