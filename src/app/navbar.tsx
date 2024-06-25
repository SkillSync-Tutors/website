import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <img src="/company-icon.svg" alt="Company Icon" className="w-10 h-10" />
          <div className="text-white text-xl font-bold">SkillSync</div>
        </div>
        <div className="flex flex-grow justify-center">
          <a href="#home" className="text-white hover:text-gray-300 mx-2">
            About
          </a>
          <a href="#about" className="text-white hover:text-gray-300 mx-2">
            Tutor
          </a>
          <a href="#services" className="text-white hover:text-gray-300 mx-2">
            Subjects
          </a>
          <a href="#contact" className="text-white hover:text-gray-300 mx-2">
            Careers
          </a>
          <a href="#contact" className="text-white hover:text-gray-300 mx-2">
            Contacts
          </a>
        </div>
        <a href="#signin" className="text-white hover:text-gray-300 font-bold">
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
