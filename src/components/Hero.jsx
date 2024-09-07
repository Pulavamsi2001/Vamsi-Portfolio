import React, { useEffect } from 'react';
import HeroImage from '../assets/hero-image.png';

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=' text-white text-center py-16 px-4 md:px-8 lg:px-16'>
      <img
        src={HeroImage}
        alt="Hero Image"
        className='mx-auto mb-8 w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-green-400 transform 
        transition-transform duration-300 hover:scale-105 hover:border-4 hover:border-blue-500'
      />
      <h1 className='text-3xl md:text-4xl font-bold'>
        {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          VAMSI KRISHNA PULA
        </span>
        , Full-Stack Developer
      </h1>

      <p className='mt-4 text-lg leading-relaxed max-w-5xl mx-auto'>
      Crafting Beautiful, Functional Web Applications with Modern Technologies
      </p>
      <div className='mt-8 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center'>
        <button
        className='bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold
        transform transition-transform duration-300 hover:text-blue-900 hover:scale-110 hover:shadow-lg px-6 py-3 rounded-full'>
         My Resume
       </button>

       <a 
          href="path/to/your/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className='bg-gradient-to-r from-blue-900 to-green-900 text-white
          transform transition-transform duration-300 hover:scale-110 hover:shadow-lg px-6 py-3 rounded-full text-center'
        >
          My Resume
        </a>
  

      </div>
    </div>
  );
};

export default Hero;