import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import all my page components
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <Link to="/" className="logo">Harshvardhan</Link>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/certifications">Certifications</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2024 Harshvardhan. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;