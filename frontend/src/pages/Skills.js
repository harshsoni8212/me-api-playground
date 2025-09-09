import React, { useState, useEffect } from 'react';

// --- Import all your skill icons ---
import pythonIcon from '../assets/python.png';
import sqlIcon from '../assets/sql.png';
import reactIcon from '../assets/react.png';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/javascript.png';
import nodejsIcon from '../assets/nodejs.png';
import mongodbIcon from '../assets/mongodb.png';
import cIcon from '../assets/c.png';
import cppIcon from '../assets/cpp.png';
import awsIcon from '../assets/aws.png';

// --- Create the map to link skill names to icons ---
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
  // Add any other skills that have a matching icon
};

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    
    fetch(`${apiUrl}/skills/`)
      .then(response => response.json())
      .then(data => setSkills(data))
      .catch(error => console.error('Error fetching skills:', error));
  }, []);

  return (
    <section id="skills" className="content-section">
      <h2 className="section-title">Professional Skills</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.id} className="skill-item">
            {/* This code now looks up the correct icon from the map */}
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
  );
}

export default Skills;