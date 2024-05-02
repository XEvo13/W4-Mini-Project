import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    
      <div>
        <Navbar />
        <a href="https://react.dev" target="_blank">
          <img src={logo} className="logo react" alt="React logo" />
        </a>
      </div>

  );
}

export default App
