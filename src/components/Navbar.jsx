import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [theme, setTheme] = useState('dark');

const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
};
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Step 91: Intersection Observer Logic
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -70% 0px", // Triggers highlight when section is in upper-mid view
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
     { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="navbar">
  <div className="logo">
    <span className="logo-icon">A</span>
    <span className="logo-text">nuShree</span>
  </div>
      <div
        className={`menu-icon ${isMenuOpen ? "open" : ""}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="bar"></div>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={activeSection === link.id ? "active-link" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;