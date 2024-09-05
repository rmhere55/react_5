import Header from "./components/Header";
import Home from "./components/Home";
// import about from "./components/about";
// import about from "./components/About";
// import from "./components/Header"
import '../src/style/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";

function App() {
  const a = 80;

  return (
    <Router>
      <Header/>
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="*" element={<div> page not found</div>} />
        {/* <Route path="/product/:id" element={<div> page not found <Product/></div>} /> */}
      </Routes>
      

    </Router>
  );
}

export default App;
