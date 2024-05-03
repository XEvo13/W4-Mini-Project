//import "./Homepage.css";
import logo from "../assets/images/logo.png";
import Listing from "./Listing";

export default function Homepage() {
  return (
    <div className="home-wrapper">
       <h1>e-commerce</h1>

      {/* Listing Page Called here */}
      <Listing />
      <a href="https://react.dev" target="_blank">
            <img src={logo} className="logo react" alt="React logo" />
          </a>
    </div>
  );
}