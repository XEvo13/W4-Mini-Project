import { useState } from "react";
import logo from "./assets/images/logo.png";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import * as React from 'react'
import productsData from "./products.json"

// Pages
import Homepage from "./components/Homepage";
import AddItem from "./AddItem";
import Error from "./components/Error";
import SingleProduct from "./components/SingleProduct";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar"
import "./App.css";

function App() {
  const [productList, setProductList] = useState(productsData);
  const deleteItem = (id) => {
    setProductList(productList.filter((item) => item.id !== id));
  };
  const addProduct = (product) => {
    setProductList([...productList, product])};
  

  return (
    <div>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage productList={productList} deleteItem={deleteItem}/>} />
          <Route path="/AddItem" element={<AddItem addProduct={addProduct} productList={productList}/>}/>
          <Route path="/SingleProduct/:productId" element={<SingleProduct productList={productList} />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="*" element={<Error />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>
      </div>
      <h1>e-commerce</h1>
    </div>
  );
}

export default App;
