import React from "react";
import Footer from "../Footer/footer";
import img1 from "../../Assets/img1.jpg"
import "./home.css"
function Home(){
    return(
        <div  className="top">
        <div className="img-style">
            <img className="l-img" src={img1} alt="landing page" />
        </div>
        <div className="description">
            <p>Welcome to AbuNajma With Kids Program, 
                an exceptional Islamic Kids Show currently 
                broadcasted on Horizon TV Kenya. As the pioneering Islamic Kids Show, we take immense pride in our innovative teaching methods and valuable 
                resources designed to inspire the younger generation. Our engaging program extends beyond the screen as we actively visit schools, fostering a dynamic environment where children delve into captivating Prophet stories, explore the depths of Quranic teachings, learning Hadith, recite Duas, and participate in a myriad of exciting activities. Join us on this educational and entertaining journey, where learning becomes 
                an unforgettable adventure for our beloved young audience.
            </p>
        </div>
            <Footer/>
        </div>
    )
}
export default Home;