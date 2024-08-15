import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Header from "./Components/Header";
import Homes from "./Components/Homes";







function App() {
  return (
    
    <Router>
    <Header/>
   <Routes>
   <Route path="/" element={<Homes/>}/>
</Routes>
    </Router>
  );
}

export default App;
