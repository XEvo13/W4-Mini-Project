import { useState } from "react";
import logo from "./assets/images/logo.png";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <a href="https://react.dev" target="_blank">
          <img src={logo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>e-commerce</h1>
    </div>
  );
}

export default App;
