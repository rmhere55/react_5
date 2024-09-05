import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Coins from './components/Coins';
import Exchange from './components/Exchange';
import CoinDetails from './components/CoinDetails';
// import Footer, { githubInfoLoader } from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exchange' element={<Exchange />} />
        <Route path='/coin/:id' element={<CoinDetails />} />
        <Route path='/coins' element={<Coins />} />
        {/* <Route 
      element={<Footer />} */}
      
      </Routes>
      {/* <Footer
       loader={githubInfoLoader}
       path='github' 
      /> */}
    </Router>
  );
};

export default App;
