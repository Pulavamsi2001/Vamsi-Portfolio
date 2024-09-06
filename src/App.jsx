import React, { useEffect } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';
import Skills from './components/Skills';
import Education from './components/Education';
import About from './components/About';
import Contact from './components/Contact';



function App() {
  useEffect(() => {
    // Scroll to the top of the page on mount
    window.scrollTo(0, 0);

    // Remove any fragment identifier from the URL
    if (window.location.hash) {
      window.history.replaceState(null, null, ' ');
    }
  }, []);

  return (
    <div>
      <div className="background-wrapper"></div>
      <div className="bg-black bg-opacity-70 min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Service />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;