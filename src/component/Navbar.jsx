import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <nav className="flex justify-between px-5 md:px-20 py-5">
        <div className="text-gray-300 text-lg font-bold">
          {"<"}
          <span className="text-[#009E67] text-xl">/</span>zzah{">"}
        </div>
        <div
          onClick={handleClick}
          className="text-gray-300 font-bold md:hidden text-3xl cursor-pointer transition-transform hover:scale-110"
        >
          <i
            className={`ri-${
              isOpen ? "close" : "git-commit"
            }-fill transition-all duration-300`}
          ></i>
        </div>
        <ul className="md:flex space-x-10 text-sm hidden">
          <li className="text-gray-300 hover:text-white transition-colors duration-200">
            <a href="#home">Home</a>
          </li>
          <li className="text-gray-300 hover:text-white transition-colors duration-200">
            <a href="#skills">Skills</a>
          </li>
          <li className="text-gray-300 hover:text-white transition-colors duration-200">
            <a href="#about">About</a>
          </li>
          <li className="text-gray-300 hover:text-white transition-colors duration-200">
            <a href="#project">Projects</a>
          </li>
          <li className="text-gray-300 hover:text-white transition-colors duration-200">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
        absolute top-20 left-0 w-full bg-[#1f1f1f] p-10
        md:hidden overflow-hidden
        transition-all duration-500 ease-in-out
        ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
      `}
      >
        <ul className="flex flex-col gap-5 text-gray-300 text-lg font-bold">
          <li
            className="hover:text-white transition-colors duration-200"
            onClick={handleLinkClick}
          >
            <a href="#home">Home</a>
          </li>
          <hr className="border-t border-[#009E67] w-full"></hr>
          <li
            className="hover:text-white transition-colors duration-200"
            onClick={handleLinkClick}
          >
            <a href="#skills">Skills</a>
          </li>
          <hr className="border-t border-[#009E67] w-full"></hr>
          <li
            className="hover:text-white transition-colors duration-200"
            onClick={handleLinkClick}
          >
            <a href="#about">About</a>
          </li>
          <hr className="border-t border-[#009E67] w-full"></hr>
          <li
            className="hover:text-white transition-colors duration-200"
            onClick={handleLinkClick}
          >
            <a href="#project">Projects</a>
          </li>
          <hr className="border-t border-[#009E67] w-full"></hr>
          <li
            className="hover:text-white transition-colors duration-200"
            onClick={handleLinkClick}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
