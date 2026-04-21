import React, { useEffect, useState } from "react";
import "./PreLoader.css";

function PreLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 800); // Wait for fade animation to finish
    }, 2000); // Show for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader-content">
        <h1 className="loader-logo">Anu Shree</h1>
        <div className="loader-bar"></div>
      </div>
    </div>
  );
}

export default PreLoader;