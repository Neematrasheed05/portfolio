import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Nabar/navbar";
import Footer from "./Components/Footer/footer";


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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </Router>
     </div>

  );
}

export default App;
