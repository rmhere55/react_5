// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './components/Home';
// import Coins from './components/Coins';
// import Exchange from './components/Exchange';
// import CoinDetails from './components/CoinDetails';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/exchange' element={<Exchange />} />
//         <Route path='/coin/:id' element={<CoinDetails />} />
//         <Route path='/coins' element={<Coins />} />
//         {/* <Route 
//       element={<Footer />} */}
//       <Route path="/login" element={<Login/>}/>
//       <Route path="/signup" element={<SignUp/>}/>
      
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;



// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Coins from './components/Coins';
import Exchange from './components/Exchange';
import CoinDetails from './components/CoinDetails';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
};

export default App;

