import "./Homepage.css";
import logo from "../assets/images/logo.png";
import Listing from "./Listing";
import "../pages/User"
import SideBar from "./Sidebar";
import Footer from "./Footer";

export default function Homepage({productList, deleteItem}) {
  return (
    <div className="home-wrapper" >
      <SideBar />
       <h1>e-commerce</h1>
      <Listing productList={productList} deleteItem={deleteItem} />
      <a href="https://react.dev" target="_blank">
            <img src={logo} className="logo react" alt="React logo" />
      </a>
      <Footer  />
    </div>
  );
}