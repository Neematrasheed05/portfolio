import React from "react";
import { Link } from 'react-router-dom';
import { FaMailBulk, FaPhone, FaTiktok, FaYoutube } from 'react-icons/fa';
import "./footer.css";

function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='footer-container'>

          <div className='phone'>
            <h4>
              <FaPhone size={20} className="mr-2" />+254718199654
            </h4>
          </div>

          <div className='email'>
            <Link to='pajmaanajuu@gmail.com' className="text-white">
              <h4 className="d-flex align-items-left">
                <FaMailBulk size={30} className="mr-2" />
                
              </h4>
            </Link>
          </div>

          <Link to='https://www.tiktok.com/@abunajmawithkids?_t=8ih3c09GuTG&_r=1' className="text-white d-flex align-items-center">
            <FaTiktok size={30} className="mr-2" />
            
          </Link>

          <Link to='https://www.youtube.com/watch?v=PZVeLjOenIA&list=PLd6S1FUPB462VoKeMmtB6L-Muspk1f_04' className="text-white d-flex align-items-center">
            <FaYoutube size={30} className="mr-2" />

          </Link>

        </div>

        <p className="mt-3">&copy; 2024 AbuNajmaWithKids</p>
      </div>
    </div>
  );
}

export default Footer;
