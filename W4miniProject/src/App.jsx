import { useState } from "react";
import logo from "./assets/images/logo.png";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar"
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Footer />
        <Sidebar/>
          <img src={logo} className="logo react" alt="React logo" />
      </div>

      <h1>e-commerce</h1>
    </div>
  );
}

export default App;
