import React, { useEffect } from "react";
import HeroImage from "../assets/hero-image.png"; // Ensure this path is correct

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white h-auto md:h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              VAMSI KRISHNA PULA
            </span>
            , Full-Stack Developer
          </h1>
          <p className="mt-4 text-lg leading-relaxed max-w-5xl mx-auto md:mx-0">
            Crafting Beautiful, Functional Web Applications with Modern Technologies
          </p>
          <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center md:justify-start">
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
        </div>
        <img
          src={HeroImage}
          alt="Hero Image"
          className="order-1 md:order-2 mx-auto w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-green-400 transform 
          transition-transform duration-300 hover:scale-105 hover:border-4 hover:border-blue-500"
        />
      </div>
    </div>
  );
};

export default Hero;