import React from "react";
import {Link } from 'react-router-dom'
import {FaMailBulk ,FaPhone, FaTiktok } from 'react-icons/fa'

function Footer(){
    return(
    <div>
      <div className='footer'>
            <div className='footer-container'>
                
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color:"#fff", marginRight:"2rem" }} />+254718199654 or  +254717595965</h4>
                    </div>

                    <div className='email'>
                       <Link to='pajmaanajuu@gmail.com'> <h4><FaMailBulk size={20} style={{ color:"#fff", marginRight:"2rem" }} />pajmaanajuu@gmail.com</h4></Link>
                    </div>

                </div>

                    <div className='social'>
                        
                        <Link to='https://www.tiktok.com/@abunajmawithkids?_t=8ih3c09GuTG&_r=1'> <FaTiktok  size={30} style={{ color:'#fff', marginRight:'1rem'}}/></Link>
                    </div>
            
            </div>

        
     
      <p>&copy; 2023 Your Company</p>
     
     </div>
    )
}
export default Footer;