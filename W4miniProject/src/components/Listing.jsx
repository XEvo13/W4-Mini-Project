import productsData from "../products.json" 
import { useState } from "react";
import "./Listing.css"
import { Link } from "react-router-dom";

export default function Listing({productList,deleteItem }) {

  console.log(productList.length)
  console.log(productList[0])
    return (
        <div className="input-wrapper">
          <ul className="grid-cols">
            {productList.map((product,productId) => (
             <li key={productId}>
               <div>{product.title}</div> 
               <div>{product.description}</div>
               <Link to={`/SingleProduct/${product.id}`}>
                  <img src={product.thumbnail} alt={product.title} />
               </Link>
               <Link className="button" to={`/SingleProduct/${product.id}/edit`}>📱EDIT📲
               </Link>
               <button onClick={() => deleteItem(product.id)}>🗑️</button>
               <br />
               <br />
             </li>
            ))}
          </ul>
        </div>
        
      )
      
}