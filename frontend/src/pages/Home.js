import React from 'react';
import profilePic from '../assets/profile.jpg'; 

function Home() {
  return (
    <>
      <section id="home" className="home">
        <div className="home-content">
          <h1>Hi, I'm Harshvardhan</h1>
          <h3>Software & AI Developer</h3>
          <p>
            Welcome to my personal portfolio. This is a showcase of my projects and technical skills.
          </p>
          <div className="btn-box">
            <a href="mailto:harshkumarsoni88252@gmail.com">Contact Me</a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-img">
            <img src={profilePic} alt="Harshvardhan's profile" />
          </div>
          <div className="about-text">
            <h3>Aspiring Developer & Tech Enthusiast</h3>
            <p>
              I am a passionate computer science student with a strong foundation in software development and AI. I thrive on solving complex problems and building efficient, user-friendly applications.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;