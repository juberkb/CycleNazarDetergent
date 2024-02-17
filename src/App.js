import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Footer from "./Footer/Footer";
import Navbar from "./Header/Navbar";
import Header from "./Header/Header";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <Navbar/>
      <Footer/>
       
      {/*<Router>
            <Navbar />
            <Routes>
        
                <Route path="/" element={<Home />} ></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/skills" element={<MySkills />} ></Route>
                <Route path="/services" element={<MyServices />} ></Route>
                <Route path="/projects" element={<MyProjects />} ></Route>
                <Route path="/contact" element={<ContactUs />} ></Route>
            
                
            </Routes>
            <Footer/>
        </Router> */}
      </header>
    </div>
  );
}

export default App;
