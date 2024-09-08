import React, { useEffect } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import HeroImage from "../assets/hero-image.png"; // Ensure this path is correct

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white py-8 px-4 md:px-8 lg:px-16 h-screen flex flex-col md:flex-row items-center justify-center">
      {/* Image for all screen sizes */}
      <img
        src={HeroImage}
        alt="Hero Image"
        className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full object-cover border-2 border-green-400 mb-8 md:mb-0 md:mr-8 transform 
        transition-transform duration-300 hover:scale-105 hover:border-4 hover:border-blue-500"
      />
      
      {/* Text content */}
      <div className="text-center md:text-left flex flex-col justify-center">
        <p className="text-lg md:text-xl lg:text-2xl text-gray-500">Welcome to my Portfolio</p>
        <h1 className="text-3xl mt-4 md:text-4xl lg:text-5xl font-bold">Hello, I am</h1>
        <h1 className="text-3xl mt-2 md:text-4xl lg:text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            VAMSI KRISHNA PULA <br />
          </span>
        </h1>
        <h1 className="text-3xl mt-2 md:text-4xl lg:text-5xl font-bold">Full-Stack Developer</h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl leading-relaxed">
          Crafting Beautiful, Functional Web Applications with Modern Technologies
        </p>
        <div className="mt-8 flex flex-col md:flex-row items-center md:items-start md:space-x-4 space-y-4 md:space-y-0">
          <a
            href="path/to/your/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold
            transform transition-transform duration-300 hover:text-blue-900 hover:scale-110 hover:shadow-lg px-6 py-3 rounded-full text-center"
          >
            My Resume
          </a>
          <button
            className="bg-gradient-to-r from-blue-900 to-green-900 text-white font-semibold
            transform transition-transform duration-300 hover:scale-110 hover:shadow-lg px-6 py-3 rounded-full"
          >
            Contact With Me
          </button>
        </div>
        <div className="mt-10 flex justify-center md:justify-start space-x-4">
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
    </div>
  );
};

export default Hero;
