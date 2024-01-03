import React from "react";
import { Card } from "react-bootstrap";
import Footer from "../Footer/footer";
import img1 from "../../Assets/img1.jpg";
import "./home.css";

function Home() {
  return (
    <div className="top">
      <Card className="img-card">
        <Card.Img className="l-img" variant="top" src={img1} alt="landing page" />
        <Card.Body>
          <Card.Title className="text-center">Welcome to AbuNajma With Kids Program</Card.Title>
          <Card.Text className="lead">
            An exceptional Islamic Kids Show currently broadcasted on Horizon TV Kenya. As the pioneering Islamic Kids Show, we take immense pride in our innovative teaching methods and valuable resources designed to inspire the younger generation. Our engaging program extends beyond the screen as we actively visit schools, fostering a dynamic environment where children delve into captivating Prophet stories, explore the depths of Quranic teachings, learn Hadith, recite Duas, and participate in a myriad of exciting activities. Join us on this educational and entertaining journey, where learning becomes an unforgettable adventure for our beloved young audience.
          </Card.Text>
        </Card.Body>
      </Card>
      <Footer />
    </div>
  );
}

export default Home;
