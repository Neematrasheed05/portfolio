import React,{useEffect} from "react";
import { Element } from "react-scroll";
import children from "../../Assets/CHILDREN.png"
import About from "../About/about";
import Services from "../Services/services";
import Contact from "../Contact/contact";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
      mirror: true,
    });
  }, []);

  return (
    <>     
     <Element
    name="home"
    className="relative overflow-hidden min-h-screen bg-indigo-900 flex items-center"
  >
    <div className="absolute inset-0">
          <img
            src={children}
            alt="Children"
            className="absolute inset-0 w-full h-full object-cover"
            data-aos="fade-in"
            data-aos-duration="1500"
          />
   
    </div>
  
  </Element>
  <Element name="about" className="w-full bg-gradient-to-r from-blue-200 to-blue-600">
        <div className="container mx-auto px-6 md:px-12 py-24 xl:py-40">
          <About />
        </div>
      </Element>

      <Element name="services" className="container mx-auto px-6 md:px-12 py-24 xl:py-40">
        <Services/>
      </Element>

      <Element name="partners" className="container mx-auto px-6 md:px-12 py-24 xl:py-40">
        <h2 className="text-4xl font-bold text-white">Partners</h2>
        <p className="text-lg text-gray-300 mt-4">
          This is the Skills section. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Element>

      <Element name="contact" className="container mx-auto px-6 md:px-12 py-24 xl:py-40">
       <Contact/>
      </Element>
    </>
  );
}

export default Home;
