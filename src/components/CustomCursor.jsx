import React, { useEffect, useState } from "react";
import "./CustomCursor.css";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setHovered(true);
    const handleUnhover = () => setHovered(false);

    window.addEventListener("mousemove", moveCursor);
    
    // Attach to all interactive elements
    const targets = document.querySelectorAll("button, a, .project-card, .skill-card");
    targets.forEach(t => {
      t.addEventListener("mouseenter", handleHover);
      t.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);


    return (
  <>
    <div className="cursor-dot" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
    <div className="cursor-outline" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
    <div className="cursor-hover" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
  </>
);
  //   // <div 
  //   //   className={`cursor-dot ${hovered ? "cursor-hover" : ""}`}
  //   //   style={{ left: `${position.x}px`, top: `${position.y}px` }}
  //   // />
  // );
}

export default CustomCursor;