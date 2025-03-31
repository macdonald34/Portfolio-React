// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate frontend developer with expertise in React.js, JavaScript, 
              and modern web technologies. I love creating beautiful, responsive, 
              and user-friendly websites.
            </p>
            <p>
              With a background in design, I bring a unique perspective to development, 
              focusing on both functionality and aesthetics.
            </p>
            <p>I am still passionate and eager to learn and work with others either independently or physically with colleagus.</p>
            <div className="about-details">
              <div>
                <h4>Name:</h4>
                <p>Macdonald Muhavi</p>
              </div>
              <div>
                <h4>Email:</h4>
                <p>macdonaldmuhavi98@gmail.com</p>
              </div>
              <div>
                <h4>Experience:</h4>
                <p>2 Years</p>
              </div>
              <div>
                <h4>Location:</h4>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="./src/assets/images" alt="About Me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;