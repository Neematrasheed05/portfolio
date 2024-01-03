// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h3>ABUNAJMA WITH KIDS PROGRAM</h3>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
