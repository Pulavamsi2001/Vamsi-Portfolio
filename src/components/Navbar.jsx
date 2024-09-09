import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <nav className='fixed w-full bg-gray-900 text-gray-100 py-4 px-6 z-50'>
      <div className='flex justify-between items-center'>
        <div className='text-2xl font-bold cursor-pointer select-none' onClick={handleLogoClick}>
          My Portfolio
        </div>
        <div className='hidden md:flex space-x-6'>
          <Link to="hero" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer transition duration-300'>Home</Link>
          <Link to="about" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer transition duration-300'>About</Link>
          <Link to="skills" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer transition duration-300'>Skills</Link>
          <Link to="project" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer transition duration-300'>Projects</Link>
          <Link to="service" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer transition duration-300'>Services</Link>
          <Link to="contact" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer transition duration-300'>Contact</Link>
        </div>

        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div className={`md:hidden absolute top-16 right-0 bg-gray-800 w-2/5 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex flex-col items-center space-y-4 py-4'>
          <Link to="hero" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer text-lg transition duration-300' onClick={toggleMenu}>Home</Link>
          <Link to="about" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer text-lg transition duration-300' onClick={toggleMenu}>About</Link>
          <Link to="skills" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer text-lg transition duration-300' onClick={toggleMenu}>Skills</Link>
          <Link to="project" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer text-lg transition duration-300' onClick={toggleMenu}>Projects</Link>
          <Link to="service" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer text-lg transition duration-300' onClick={toggleMenu}>Services</Link>
          <Link to="contact" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer text-lg transition duration-300' onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;