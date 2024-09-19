import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Nabar/navbar";
import './App.css';
import Home from "./Components/Home/home";
// import Footer from "./Components/Footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
    <Home />
        </div>

  );
}

export default App;
