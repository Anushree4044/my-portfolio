import React, { useState } from "react";
import "./Projects.css";
import portfolio from "../assets/portfolio1.jpeg";
import expense from "../assets/expense.jpeg";
import emotion from "../assets/emotion-detection.jpeg";

function Projects() {
  const [preview, setPreview] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // 3D Tilt Logic
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    setHoveredIndex(null);
  };

  return (
    <section className="projects section-mask" id="projects">
      <h2 className="reveal-on-scroll">My Projects</h2>
      <div className="project-grid">
        
        {/* Card 1: Modern Portfolio */}
        <div 
          className="project-card reveal-on-scroll" 
          onMouseMove={handleMouseMove} 
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-media" onClick={() => setPreview(portfolio)}>
            <img src={portfolio} alt="Portfolio" loading="lazy" />
            {hoveredIndex === 0 && (
              <div className="video-placeholder-overlay">
                <span>View Project</span>
              </div>
            )}
          </div>
          
          <div className="card-content">
             <h3>Modern Portfolio</h3>
             <p>Built with React & Framer Motion.</p>
             <div className="project-buttons">
                <a href="#" rel="noreferrer">Live</a>
                <a href="https://kowshik63600.github.io/my-portfolio/" target="_blank" rel="noreferrer">GitHub</a>
             </div>
          </div>
        </div>

        {/* Card 2: Expense Tracker */}
        <div 
          className="project-card reveal-on-scroll" 
          onMouseMove={handleMouseMove} 
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-media" onClick={() => setPreview(emotion)}>
            <img src={emotion} alt="Expense Tracker" loading="lazy" />
            {hoveredIndex === 1 && (
              <div className="video-placeholder-overlay">
                <span>View Project</span>
              </div>
            )}
          </div>

          <div className="card-content">
             <h3>Emotion Detection</h3>
             <p>Realtime emotion detect app.</p>
             <div className="project-buttons">
                <a href="#" target="_blank" rel="noreferrer">Live</a>
                <a href="#" rel="noreferrer">GitHub</a>
             </div>
          </div>
        </div>

      </div>

      {/* Image Preview Modal */}
      {preview && (
        <div className="img-preview" onClick={() => setPreview(null)}>
          <img src={preview} alt="Preview" />
        </div>
      )}
    </section>
  );
}

export default Projects;