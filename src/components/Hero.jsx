import React, { useEffect, useRef, useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import HeroImage from "../assets/hero-image.png"; // Ensure this path is correct

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger the observer when 10% of the hero section is in view
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="hero" ref={heroRef} className="text-white py-8 px-4 md:px-8 lg:px-16 h-screen flex flex-col md:flex-row items-center justify-center lg:gap-40 relative">
      {/* Image for all screen sizes */}
      <img
        src={HeroImage}
        alt="Hero Image"
        className={`w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full object-cover border-2 border-green-400 mb-8 md:mb-0 md:mr-0 lg:mr-8 transform transition-transform duration-300 hover:scale-105 hover:border-4 hover:border-blue-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      />
      
      {/* Text content */}
      <div className="text-center md:text-left flex flex-col justify-center">
        <p className={`text-lg md:text-xl lg:text-2xl text-gray-500 transition-opacity duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Welcome to my Portfolio</p>
        <h1 className={`text-3xl mt-4 md:text-4xl lg:text-5xl font-bold transition-opacity duration-2000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Hello, I am</h1>
        <h1 className={`text-3xl md:mt-4 md:text-4xl lg:text-5xl font-bold transition-opacity duration-2000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            VAMSI KRISHNA PULA <br />
          </span>
        </h1>
        <h1 className={`text-3xl md:mt-4 md:text-4xl lg:text-5xl font-bold transition-opacity duration-2000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Full-Stack Developer</h1>
        <p className={`mt-4 text-base text-gray-300 md:text-lg lg:text-xl leading-relaxed transition-opacity duration-2000 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Crafting Beautiful, Functional Web Applications with Modern Technologies
        </p>
        <div className={`mt-8 flex flex-col md:flex-row items-center md:items-start md:space-x-4 space-y-4 md:space-y-0 transition-opacity duration-2000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="path/to/your/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-700 to-blue-500 text-white font-semibold
            transform transition-transform duration-300 hover:text-blue-900 hover:scale-110 hover:shadow-lg px-6 py-3 rounded-full text-center"
          >
            View My Resume
          </a>
          <a
            href="path/to/your/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-700 to-blue-500 text-white font-semibold
            transform transition-transform duration-300 hover:text-blue-900 hover:scale-110 hover:shadow-lg px-6 py-3 rounded-full text-center"
          >
            Explore My Work
          </a>
        </div>
        <div className={`mt-10 flex justify-center md:justify-start space-x-4 transition-opacity duration-2000 delay-1200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a href="https://www.facebook.com/pulavamsi2001?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transform transition-transform duration-300 hover:scale-110">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transform transition-transform duration-300 hover:scale-110">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/vamsi-pula-238246259/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transform transition-transform duration-300 hover:scale-110">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transform transition-transform duration-300 hover:scale-110">
            <FaGithub size={24} />
          </a>
        </div>
      </div>

      {/* Scroll Here Indication */}
      {showScrollIndicator && (
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:hidden mb-4">
    <div className="text-gray-400 animate-bounce">
      <svg
        className="w-6 h-6 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
      <p className="text-sm text-gray-800"><center>.</center></p>
    </div>
  </div>
)}

    </div>
  );
};

export default Hero;