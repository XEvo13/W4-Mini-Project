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
               {product.discountPercentage > 15 && <div className="greatDeal">GREAT DEAL!</div>}
               <Link to={`/SingleProduct/${product.id}`}>
                  <img src={product.thumbnail} style={{width:250,height:150}}  alt={product.title} />
               </Link>
               <Link className="edit-button" to={`/SingleProduct/${product.id}/edit`}>✏️
               </Link>
               <button className="delete-button" onClick={() => deleteItem(product.id)}>🗑️</button>
               <br />
               <br />
             </li>
            ))}
          </ul>
        </div>
        
      )
      
}