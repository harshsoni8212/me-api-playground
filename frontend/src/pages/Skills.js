import React from 'react';

// --- Import the skill icons 
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

// --- Data mappings and arrays ---

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

function Skills() {
  return (
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
  );
}

export default Skills;