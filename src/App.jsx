import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop/BackToTop";
import CursorGlow from "./components/CursorGlow";
import CustomCursor from "./components/CustomCursor";
import PreLoader from "./components/PreLoader";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(
      ".hero, .about, .projects, .skills, .contact, .footer",
      {
        distance: "60px",
        duration: 1200,
        easing: "ease",
        interval: 200,
        origin: "bottom",
        reset: false,
      }
    );
  }, []);

  return (
    <>
      {!loaded && (
        <div className="loader-screen">
          <h1 className="loader-logo">Anushree</h1>
          <p className="loader-text">Loading Portfolio...</p>
        </div>
      )}

      {/* Put the cursor OUTSIDE any wrappers so it doesn't block clicks */}
      <CustomCursor />
      
      <div className={loaded ? "page-show" : "page-hide"}>
        <PreLoader />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <BackToTop />
        <CursorGlow />
        
        {/* Background elements */}
        <div className="particles"></div>
        <div className="bg-orbs"></div>
      </div>
    </>
  );
}

export default App;