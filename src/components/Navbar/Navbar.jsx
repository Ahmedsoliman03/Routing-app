import React, { useState } from 'react';
import { NavLink , Link } from 'react-router-dom';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <header className="bg-gray-800 h-28 px-5">
      <nav className="container mx-auto px-6 py-3 pt-10">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <Link to="" className='text-4xl'>START FRAMEWORK</Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li><NavLink to="about" className="text-white text-xl font-bold">About</NavLink></li>
              <li><NavLink to="portfolio" className="text-white text-xl font-bold">Portfolio</NavLink></li>
              <li><NavLink to="contact" className="text-white text-xl font-bold">Contact</NavLink></li>
            
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="outline-none mobile-menu-button">
              <i className="fa-solid fa-bars w-6 h-6 text-white"></i>
            </button>
          </div>
        </div>
        <div className={`mobile-menu md:hidden fixed inset-0 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} bg-gray-800 text-white transition-transform duration-300 ease-in-out z-50`}>
          <div className="flex justify-end p-4">
            <button onClick={toggleMobileMenu} className="text-white">
            <i className="fa-solid fa-bars w-6 h-6 text-white"></i>
            </button>
          </div>
          <div className='relative'>
            <ul className="mt-4 space-y-4 px-4">
              <li><NavLink onClick={handleLinkClick} to="about" className="block px-4 py-2  rounded">About</NavLink></li>
              <li><NavLink onClick={handleLinkClick} to="portfolio" className="block px-4 py-2  rounded">Porfolio</NavLink></li>
              <li><NavLink onClick={handleLinkClick} to="contact" className="block px-4 py-2  rounded">Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}