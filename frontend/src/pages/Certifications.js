import React from 'react';

// --- Import my certificate images ---
import mernCert from '../assets/certs/mern.png';
import udemyCert from '../assets/certs/udemy.png';
import courseraCert from '../assets/certs/coursera.png';

const certifications = [
    { id: 1, name: "MERN Stack Development", image: mernCert },
    { id: 2, name: "Prompt Engineer for ChatGPT - Udemy", image: udemyCert },
    { id: 3, name: "Computer Networking - Coursera", image: courseraCert },
];

function Certifications() {
  return (
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
  );
}

export default Certifications;