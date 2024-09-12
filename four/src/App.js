import React from 'react'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
// import { Toaster } from "react-hot-toast";
// import Cart from "./components/Cart.jsx";

import "./styles/app.scss";
import Product from './components/Product';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </Router>
  )
}

export default App