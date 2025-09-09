import React, { useState, useEffect } from 'react';


function Projects() {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
  // Read the API URL from the environment variable
  const apiUrl = process.env.REACT_APP_API_URL;

  const url = searchQuery 
    ? `${apiUrl}/projects/search/?query=${searchQuery}`
    : `${apiUrl}/projects/`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => setProjects(data))
    .catch(error => console.error('Error fetching projects:', error));
}, [searchQuery]);

  return (
    <section id="projects" className="content-section">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        
        <input 
          type="text"
          className="search-bar"
          placeholder="Search by technology..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>
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
  );
}

export default Projects;