import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Nabar/navbar";


import './App.css';
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Home from "./Components/Home/home";
import Skills from "./Components/Skills/skills";
import Services from "./Components/Services/services";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
    
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
     </div>

  );
}

export default App;
