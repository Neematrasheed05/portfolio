import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <nav className="bg-indigo-900 bg-opacity-90 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <div className="logo text-white">
          <h3>ABUNAJMA WITH KIDS PROGRAM</h3>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-6">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="text-sm uppercase text-white cursor-pointer hover:text-indigo-600"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="text-sm uppercase text-white cursor-pointer hover:text-indigo-600"
              >
                About us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                className="text-sm uppercase text-white cursor-pointer hover:text-indigo-600"
              >
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                className="text-sm uppercase text-white cursor-pointer hover:text-indigo-600"
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="text-sm uppercase text-white cursor-pointer hover:text-indigo-600"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
