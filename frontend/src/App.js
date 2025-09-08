// frontend/src/App.js

import React from 'react';
import './App.css';

// --- IMPORT YOUR IMAGES HERE ---
import profilePic from './assets/profile.jpg';
import pythonIcon from './assets/python.png';
import sqlIcon from './assets/sql.png';
import reactIcon from './assets/react.png';
import htmlIcon from './assets/html.png';
import cssIcon from './assets/css.png';
import jsIcon from './assets/javascript.png';
import nodejsIcon from './assets/nodejs.png';
import mongodbIcon from './assets/mongodb.png';
import cIcon from './assets/c.png';
import cppIcon from './assets/cpp.png';
import awsIcon from './assets/aws.png';

// --- IMPORT YOUR CERTIFICATE IMAGES ---
import mernCert from './assets/certs/mern.png';
import udemyCert from './assets/certs/udemy.png';
import courseraCert from './assets/certs/coursera.png';


// --- DATA MAPPINGS AND ARRAYS ---

const skillIcons = {
  "Python": pythonIcon,
  "SQL": sqlIcon,
  "React": reactIcon,
  "HTML": htmlIcon,
  "CSS": cssIcon,
  "JavaScript": jsIcon,
  "Node.js": nodejsIcon,
  "MongoDB": mongodbIcon,
  "C": cIcon,
  "C++": cppIcon,
  "AWS": awsIcon,
};

const skills = [
    { id: 1, name: "Python", category: "Language" },
    { id: 2, name: "SQL", category: "Database" },
    { id: 3, name: "React", category: "Frontend" },
    { id: 4, name: "HTML", category: "Frontend" },
    { id: 5, name: "CSS", category: "Frontend" },
    { id: 6, name: "JavaScript", category: "Language" },
    { id: 7, name: "Node.js", category: "Backend" },
    { id: 8, name: "MongoDB", category: "Database" },
    { id: 9, name: "C", category: "Language" },
    { id: 10, name: "C++", category: "Language" },
    { id: 11, name: "AWS", category: "Cloud" },
];

const projects = [
    { id: 1, title: "AI-Based Job Shortlisting Platform", description: "A machine learning-powered job recommendation system to enhance hiring efficiency and improve job-resume matching accuracy.", technologies: "Python, Flask, NLP, SQL" },
    { id: 2, title: "Voting Management System", description: "A C-based voting system used in mock elections to enhance voting efficiency, featuring real-time tallying and two-factor authentication.", technologies: "C" },
];

const certifications = [
    { id: 1, name: "MERN Stack Development", image: mernCert },
    { id: 2, name: "Prompt Engineer for ChatGPT - Udemy", image: udemyCert },
    { id: 3, name: "Computer Networking - Coursera", image: courseraCert },
];


function App() {
  return (
    <div className="container">
      <header className="header">
        <a href="#home" className="logo">Harshvardhan</a>
        <nav className="navbar">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
        </nav>
      </header>

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
              I am a passion driven computer science student with a strong foundation in software development and artificial intelligence. I thrive on solving complex problems and building applications that are both efficient and user-friendly. My experience ranges from backend development with Python and Node.js to creating dynamic frontends with React. I am always eager to learn new technologies and apply my skills to real-world challenges.
            </p>
          </div>
        </div>
      </section>

      <main className="main-content">
        <section id="projects" className="content-section">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>{project.technologies}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section">
          <h2 className="section-title">Professional Skills</h2>
          <div className="skills-grid">
            {skills.map(skill => (
              <div key={skill.id} className="skill-item">
                <img 
                  src={skillIcons[skill.name]} 
                  alt={`${skill.name} icon`} 
                  className="skill-icon"
                />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="content-section">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-grid">
            {certifications.map(cert => (
              <div key={cert.id} className="cert-card">
                <a href={cert.image} target="_blank" rel="noopener noreferrer">
                  <img src={cert.image} alt={cert.name} className="cert-image" />
                </a>
                <p className="cert-title">{cert.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Harshvardhan. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;