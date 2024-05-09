import "./Homepage.css";
import logo from "../assets/images/logo.png";
import Listing from "./Listing";
// import "./User"
// import SideBar from "./Sidebar";
import { useState } from "react";
import Footer from "./Footer";

export default function Homepage({productList, deleteItem}) {
  return (
    <div className="home-wrapper" >
      {/* <SideBar /> */}
       <h1>E-commerce</h1>
      {/* Listing Page Called here */}
      <Listing productList={productList} deleteItem={deleteItem} />
      <a href="https://react.dev" target="_blank">
            <img src={logo} className="logo react" alt="React logo" />
      </a>
     
    </div>
  );
}