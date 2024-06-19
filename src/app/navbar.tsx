import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-white text-xl font-bold">BrandName</div>
        <div className="flex flex-grow justify-end">
          <a href="#home" className="text-white hover:text-gray-300 mx-2">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-300 mx-2">
            About
          </a>
          <a href="#services" className="text-white hover:text-gray-300 mx-2">
            Services
          </a>
          <a href="#contact" className="text-white hover:text-gray-300 mx-2">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
