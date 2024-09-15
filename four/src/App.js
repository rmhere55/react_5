// // import React , {useState} from 'react'
// // import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
// // import Home from './components/Home'
// // import Header from './components/Header'
// // // import { Toaster } from "react-hot-toast";
// // // import Cart from "./components/Cart.jsx";

// // import "./styles/app.scss";
// // import Product from './components/Product';

// // const App = () => {

// //   const [products, setProducts] = useState([]);

// //   // Function to receive new products from the form
// //   const addProductHandler = (newProduct) => {
// //     setProducts((prevProducts) => [...prevProducts, newProduct]);
// //   };
// //   return (
// //     <Router>
// //       <Header/>
// //       <Routes>
// //         <Route path='/' element={<Home products ={products} addProductHandler={addProductHandler} />}/>
// //         <Route path='/product' element={<Product  onAddProduct={addProductHandler} />}/>
// //       </Routes>
// //     </Router>
// //   )
// // }

// // export default App



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Header from './components/Header';
// import Product from './components/Product';


// const App = () => {
//   // const [products, setProducts] = useState([]);
//   const [cartItems, setCartItems] = useState([]);
//   const [buyItems, setBuyItems] = useState([]);


//   // const addProductHandler = (newProduct) => {
//   //   setProducts((prevProducts) => [...prevProducts, newProduct]);
//   // };
//   // const addToBuytHandler = (newProduct) => {
//   //   setProducts((prevProducts) => [...prevProducts, newProduct]);
//   // };
//   // const addToCartHandler = (newProduct) => {
//   //   setProducts((prevProducts) => [...prevProducts, newProduct]);
//   // };

//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route
//           path='/'
//           element={<Home products={products}  />}
//         />
//         <Route
//           path='/product'
//           element={<Product  />}
//         />
         
//         <Route
//           path='/cart' element={<Cart cartItems={cartItems} buyItems={buyItems} />}
//           />

//       </Routes>
//     </Router>
//   );
// };

// export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Product from './components/Product';
import './styles/app.scss';
 import Cart from './components/Cart';
import Buy from './components/Buy';


// import { ProductContextProvider } from './Context/ProductContext';  // Import ProductContextProvider

const App = () => {
  return (
    // <ProductContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/buy_now' element={<Buy/>} />
        </Routes>
      </Router>
    // </ProductContextProvider>
  );
};

export default App;

