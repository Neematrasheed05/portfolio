import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';
import img from "../../Assets/outdoor.jpg";
import imgschool from "../../Assets/school.jpg";
import imgstudio from "../../Assets/studio.jpg";
import  { useEffect } from 'react';

function About() {
    // Add a scroll event listener to your component
useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
  
      // Check if the user has scrolled past a certain point (adjust as needed)
      const threshold = 300;
      const scrolledClass = 'scrolled';
  
      document.querySelectorAll('.outdoor-img, .school-img, .studio-img').forEach((img) => {
        if (scrollY > threshold) {
          img.classList.add(scrolledClass);
        } else {
          img.classList.remove(scrolledClass);
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="layout">
        <h2 class="text-center">Our Story</h2>
        <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <p class="text-justify">Understanding the challenges of teaching Islam to children, we recognize that conventional methods often fall short in making the subject relatable and understandable for young minds. The use of complex language and unfamiliar jargon can create barriers, making it difficult for kids to absorb and connect with the teachings of Islam.</p>
        <p class="text-justify">Our approach stands out by incorporating storytelling, characters, puzzles, flash cards, and other interactive tools to make Islamic education more relatable and interesting for children. We believe in breaking away from strict teaching styles and instead focus on inspiring young minds. Unlike some traditional methods, we set high standards for Islamic knowledge, emphasizing its importance as a crucial part of education.</p>
        <p class="text-justify">In contrast to mainstream education, which may overshadow the significance of Islamic learning, our program aims to foster a positive mindset and spiritual well-being in children. We understand the challenges faced in the upbringing of kids, considering the constant influence of societal pressures and distractions. Our goal is to prepare children to face the trials of the world with resilience and a strong foundation in Islamic values.</p>
        <p class="text-justify">With national TV coverage and a significant following on TikTok, where our content has garnered over 1 million likes, "Abu Najma with Kids Program" serves as a platform to promote and market various institutions. Through a combination of fun storytelling, engaging games, defined character building, and outdoor activities, we strive to create an enriching and enjoyable learning experience for children.</p>
      </div>
    </div>
  </div>
      <Row>
        <Col>
          <Card>
            <Card.Img className="outdoor-img" variant="top" src={img} alt="outdoor pic" />
            <Card.Body>
              <Card.Title>Outdoor Activities</Card.Title>
              <Card.Text>
                We organized a Prayer Day activity for the Class 8 Candidates that was held in Karura Forest. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img className="school-img" variant="top" src={imgschool} alt="school pic" />
            <Card.Body>
              <Card.Title>School Programs</Card.Title>
              <Card.Text>
                We hold Pastoral lessons with diffrent schools 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img className="studio-img" variant="top" src={imgstudio} alt="studio pic" />
            <Card.Body>
              <Card.Title>Studio Sessions</Card.Title>
              <Card.Text>
                During Holidays we hold Live sessions with some of our children.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <p class="text-center">Join us on this journey of nurturing young minds, fostering a love for Islam, and preparing children to navigate the complexities of the world with confidence and grace.</p>

    </div>
  );
}

export default About;
