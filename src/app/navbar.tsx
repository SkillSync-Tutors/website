import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5d66800c8c45ec91b23e478c3d14ee26572f6f4996fd2342d3a2f6f619cedbdd?apiKey=ad6b6243cceb47c3a1c6ae8e60c1e63d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d66800c8c45ec91b23e478c3d14ee26572f6f4996fd2342d3a2f6f619cedbdd?apiKey=ad6b6243cceb47c3a1c6ae8e60c1e63d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d66800c8c45ec91b23e478c3d14ee26572f6f4996fd2342d3a2f6f619cedbdd?apiKey=ad6b6243cceb47c3a1c6ae8e60c1e63d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d66800c8c45ec91b23e478c3d14ee26572f6f4996fd2342d3a2f6f619cedbdd?apiKey=ad6b6243cceb47c3a1c6ae8e60c1e63d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d66800c8c45ec91b23e478c3d14ee26572f6f4996fd2342d3a2f6f619cedbdd?apiKey=ad6b6243cceb47c3a1c6ae8e60c1e63d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d66800c8c45ec91b23e478c3d14ee26572f6f4996fd2342d3a2f6f619cedbdd?apiKey=ad6b6243cceb47c3a1c6ae8e60c1e63d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d66800c8c45ec91b23e478c3d14ee26572f6f4996fd2342d3a2f6f619cedbdd?apiKey=ad6b6243cceb47c3a1c6ae8e60c1e63d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d66800c8c45ec91b23e478c3d14ee26572f6f4996fd2342d3a2f6f619cedbdd?apiKey=ad6b6243cceb47c3a1c6ae8e60c1e63d&"
            className="shrink-0 aspect-square w-[71px]"
          />
          <div className="flex-auto my-auto text-black text-xl font-bold ml-2">SkillSync Tutors</div>
        </div>
        <div className="flex items-center">
          <a href="#home" className="text-black hover:text-gray-300 mx-2">
            View Tutors
          </a>
          <a href="#about" className="text-black hover:text-gray-300 mx-2">
            About Us
          </a>
          <a href="#services" className="text-black hover:text-gray-300 mx-2">
            Careers
          </a>
          <a href="#contact" className="text-black hover:text-gray-300 mx-2">
            Contact
          </a>
          <a href="#cart" className="text-black hover:text-gray-300 mx-2">
            Cart
          </a>
          <a href="#login" className="text-black hover:text-gray-300 mx-2">
            Login
          </a>
          <button
            type="button"
            className="bg-cyan-950 text-white hover:text-gray-300 py-2 px-4 rounded ml-2"
          >
            <a href="#signin" className="text-white">
              Get Started
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
