import React from 'react';
import './App.css';
import MissionVision from './Components/MissionVision';
import GetInTouch from "./Components/GetInTouch";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <MissionVision />
        <GetInTouch />
      </main>
      <footer>
        <p>&copy; Jarurat Care Foundation, 2024</p>
      </footer>
    </div>
  );
}

export default App;
