import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Product from './components/Product';
import './styles/app.scss';
 import Cart from './components/Cart';
import Buy from './components/Buy';


const App = () => {
  // const [ product , setProduct] = useState('')
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/product" element={<Product />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/buy_now' element={<Buy/>} />
        </Routes>
      </Router>
  );
};

export default App;

