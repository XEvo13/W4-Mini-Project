import productsData from "../products.json" //assert { type: "json" };
import { useState } from "react";

export default function Listing() {
    const [productList, setProductList] = useState(productsData);

    return (
        <div className="wrapper">
          <ul>
            {productList.map((product,index) => (
             <li key={index}>
               {product.id} 
             </li>
            ))}
          </ul>
        </div>
      )
}