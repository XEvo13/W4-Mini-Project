import { useState } from "react";
import logo from "./assets/images/logo.png";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./components/Homepage";
import Error from "./components/Error";


function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
