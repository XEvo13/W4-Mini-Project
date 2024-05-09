import { NavLink } from "react-router-dom";
// import Listing from "./Listing";
import { useState } from "react";
import AddItem from "../AddItem";
import "../components/Sidebar.css"

function SideBar({productList}) {

    // const productLength = productList.length;
    console.log(productList)

    let cost= 0;
    productList.map((product) => {
        return(
        cost += product.price)}
       )

    return(
        <nav className="sidebar">
            <ul className="sidebar-ul">
                <NavLink to="/AddItem" className={({isActive}) => (isActive ? "active" : "")}>
                    <button className="button" onClick={AddItem}>Create</button>
                </NavLink>
                <br/>
                <br/>
                <div className="Products"> Products: {productList.length}</div>
                <br/>
                <br/>
                <div className="Products"> Value: {cost}</div>
                
                {/* {productList.map((product,productId) => (
             <li key={productId}>
               <div>{product.title}</div> 
               <div>{product.description}</div>
               <br />
               <br />
             </li>
            ))} */}
                {/* <NavlLink to="/Listing" className={({isActive}) => (isActive ? "active" : "")}>
                    <button className="button" onClick={Listing}>Update</button>
                </NavLink> */}
                {/* <div>Products: {productLength}</div> */}
            </ul>
        </nav>
    );
}

export default SideBar;