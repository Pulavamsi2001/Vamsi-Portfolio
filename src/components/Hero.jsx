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
        alt=""
        className='mx-auto mb-8 w-48 h-48 md:w-64 md:h-64 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105 hover:border-4 hover:border-green-400'
      />
      <h1 className='text-3xl md:text-4xl font-bold'>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          VAMSI KRISHNA PULA
        </span>
        , Full-Stack Developer
      </h1>

      <p className='mt-4 text-lg leading-relaxed max-w-5xl mx-auto'>
        I’m a passionate web developer with hands-on training from Beaseant Technologies. <br /> I specialize in crafting beautiful, functional web applications using modern technologies.
      </p>
      <div className='mt-8 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center'>
        <button
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          Contact With Me
        </button>
        <button
        className='bg-gradient-to-r from-blue-500 to-green-500 text-white
        transform transition-transform duration-300 hover:scale-110 hover:shadow-lg px-6 py-3 rounded-lg'>
         My Resume
       </button>
      </div>
    </div>
  );
};

export default Hero;