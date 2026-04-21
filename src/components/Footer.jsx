import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { id: 1, icon: "fab fa-github", link: "https://github.com/kowshik63600", color: "#fff" },
    { id: 2, icon: "fab fa-linkedin-in", link: "https://linkedin.com/in/kowshik-m", color: "#0077b5" },
    { id: 3, icon: "fab fa-instagram", link: "https://instagram.com", color: "#e4405f" },
    { id: 4, icon: "fas fa-envelope", link: "mailto:anu042005as@gmail.com", color: "#38bdf8" },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-dock">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="dock-icon"
              style={{ "--hover-color": social.color }}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
        <div className="footer-divider"></div>
        <p className="copyright">
          © {currentYear} <span>AnuShree</span>. Built with Passion.
        </p>
      </div>
    </footer>
  );
}

export default Footer;