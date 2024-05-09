import { useState } from "react";
import logo from "./assets/images/logo.png";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import * as React from 'react'
import productsData from "./products.json"

// Pages
import Homepage from "./components/Homepage";
import AddItem from "./AddItem";
import UpdateItem from "./UpdateItem";
import Error from "./components/Error";
import SingleProduct from "./components/SingleProduct";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar"
import Aboutus from "./components/Aboutus"
// import User from "./components/User"
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
          {/* <Route path="/User" element={<User />}/> */}
          <Route path= "/SingleProduct/:productId/edit" element={<UpdateItem productList={productList} setProductList={setProductList}/>}/>
          <Route path="/SingleProduct/:productId" element={<SingleProduct productList={productList} />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/footer" element={<Footer />} />
          
          <Route path="*" element={<Error />} />
          
        </Routes>
        <Sidebar  productList={productList}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
