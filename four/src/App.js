// import React , {useState} from 'react'
// import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
// import Home from './components/Home'
// import Header from './components/Header'
// // import { Toaster } from "react-hot-toast";
// // import Cart from "./components/Cart.jsx";

// import "./styles/app.scss";
// import Product from './components/Product';

// const App = () => {

//   const [products, setProducts] = useState([]);

//   // Function to receive new products from the form
//   const addProductHandler = (newProduct) => {
//     setProducts((prevProducts) => [...prevProducts, newProduct]);
//   };
//   return (
//     <Router>
//       <Header/>
//       <Routes>
//         <Route path='/' element={<Home products ={products} addProductHandler={addProductHandler} />}/>
//         <Route path='/product' element={<Product  onAddProduct={addProductHandler} />}/>
//       </Routes>
//     </Router>
//   )
// }

// export default App



import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Product from './components/Product';
import './styles/app.scss';

const App = () => {
  const [products, setProducts] = useState([]);

  const addProductHandler = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home products={products} addProductHandler={addProductHandler} />}
        />
        <Route
          path='/product'
          element={<Product onAddProduct={addProductHandler} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
