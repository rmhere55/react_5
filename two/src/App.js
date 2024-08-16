import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Header from "./Components/Header";
import Homes from "./Components/Homes";
import Footer from "./Components/Footer";







function App() {
  return (
    
    <Router>
    <Header/>
   <Routes>
   <Route path="/" element={<Homes/>}/>
</Routes>
<Footer/>
    </Router>
  );
}

export default App;
