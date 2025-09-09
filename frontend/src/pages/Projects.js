import React, { useState, useEffect } from 'react';


function Projects() {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let url = searchQuery 
      ? `http://127.0.0.1:8000/projects/search/?query=${searchQuery}`
      : 'http://127.0.0.1:8000/projects/';
    
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