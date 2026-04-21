import React from 'react';
import MagneticSkill from './MagneticSkill'; 
import './Skills.css';

const skillsData = [
  "React.js", "JavaScript", "HTML5", "CSS3", 
   "Git & GitHub", "Firebase",
  "Responsive Design"
];

function Skills() {
  return (
  <section className="skills reveal-on-scroll" id="skills">
    <div className="skills-wrapper"> {/* Changed class name to avoid conflicts */}
      <h2 className="section-title">Technical Expertise</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <MagneticSkill key={index}>
            <div className="skill-card">
              <span className="skill-dot"></span>
              {skill}
            </div>
          </MagneticSkill>
        ))}
      </div>
    </div>
  </section>
);
}
export default Skills;