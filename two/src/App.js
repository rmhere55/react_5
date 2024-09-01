import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Header from "./Components/Header";
import Homes from "./Components/Homes";
import Footer from "./Components/Footer";
import Video from "./Components/Video";
import Upload from "./Components/Upload";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";







function App() {
  return (
    
    <Router>
    <Header/>
   <Routes>
   <Route path="/" element={<Homes/>}/>
   <Route path="/Video" element={<Video/>}/>
   <Route path="/upload-video" element={<Upload/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/signup" element={<SignUp/>}/>
</Routes>
<Footer/>
    </Router>
  );
}

export default App;
