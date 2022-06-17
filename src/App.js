import React from 'react';
import { Navbar } from './Components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import  { Home } from './Components/Home';
import { Product }  from './Components/Product';
import { ProductDetails }  from './Components/ProductDetails';
import { ProductData } from './Components/ProductData';
import { PageNotFound } from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
    <Navbar />  
    <Routes>
   <Route path = "/" element = {<Home />}></Route>
    <Route path = "/products" element  = {<Product />}></Route>
    <Route path = "/details" element = {<ProductDetails />}></Route>
    <Route path = "details/:itemId" element = {<ProductData />}></Route>
    <Route path = "*" element = {<PageNotFound />}></Route>
    </Routes>
    </div>
  );
}

export default App;
