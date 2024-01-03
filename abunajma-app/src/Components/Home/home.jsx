import React , {useState, useEffect} from "react";
import YouTube from "react-youtube";

import { Card } from "react-bootstrap";
import Footer from "../Footer/footer";
import img1 from "../../Assets/img1.jpg";
import "./home.css";

function Home() {
  const [player, setPlayer] = useState(null);

  const videoOpts = {
    height: "450",
    width: "700",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    setPlayer(event.target);
  };

  useEffect(() => {
    if (player) {
      const stopTime = 52; // Stop the video at 46seconds
      const interval = setInterval(() => {
        if (player.getCurrentTime() >= stopTime) {
          player.pauseVideo();
          clearInterval(interval);
        }
      }, 1000); // Check every second
    }
  }, [player]);

  return (
    <div className="top">
      <Card className="img-card">
      
      <Card.Title className="text-center welcome-text">Naturing Kids Talents</Card.Title>
       <Card.Img className="l-img" variant="top" src={img1} alt="landing page" />
       <div className="video-container">
          <YouTube
            videoId="zmlBJehY5zA"
            opts={videoOpts}
            onReady={onReady}
          />
        </div>
        <Card.Body>
          <Card.Text className="lead ">
            An exceptional Islamic Kids Show currently broadcasted on Horizon TV Kenya. As the pioneering Islamic Kids Show, we take immense pride in our innovative teaching methods and valuable resources designed to inspire the younger generation. Our engaging program extends beyond the screen as we actively visit schools, fostering a dynamic environment where children delve into captivating Prophet stories, explore the depths of Quranic teachings, learn Hadith, recite Duas, and participate in a myriad of exciting activities. Join us on this educational and entertaining journey, where learning becomes an unforgettable adventure for our beloved young audience.
          </Card.Text>
        </Card.Body>
      </Card>
      <Footer />
    </div>
  );
}

export default Home;
