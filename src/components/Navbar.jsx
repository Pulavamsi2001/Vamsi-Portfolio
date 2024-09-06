import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-gray-900 text-white px-4 md:px-8 lg:px-16 sticky top-0 md:sticky md:top-0 md:z-50 bottom-0 z-50'>
      <div className='container py-2 flex justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Welcome to My Portfolio!</div>
        <div className='hidden md:flex space-x-6'>
          <Link to="home" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer'>Home</Link>
          <Link to="about" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer'>About</Link>
          <Link to="service" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer'>Services</Link>
          <Link to="project" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer'>Projects</Link>
          <Link to="skills" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer'>Skills</Link>
          <Link to="contact" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer'>Contact</Link>
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Connect Me
        </button>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden'>
          <div className='flex flex-col items-center space-y-4 py-4'>
            <Link to="home" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer' onClick={toggleMenu}>Home</Link>
            <Link to="about" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer' onClick={toggleMenu}>About</Link>
            <Link to="service" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer' onClick={toggleMenu}>Services</Link>
            <Link to="project" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer' onClick={toggleMenu}>Projects</Link>
            <Link to="skills" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer' onClick={toggleMenu}>Skills</Link>
            <Link to="contact" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer' onClick={toggleMenu}>Contact</Link>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              Connect Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;