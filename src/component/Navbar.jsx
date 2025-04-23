import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (section) => {
    setIsOpen(false);
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Enhanced scroll detection with offset calculation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "about", "project", "contact"];
      const scrollPosition = window.scrollY + 100; // Adjust offset based on your navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Run once on mount to set initial active section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (section) => activeSection === section;

  return (
    <div className="fixed w-full top-0 left-0  z-50 bg-[#2A2A2A] bg-opacity-90 backdrop-blur-sm ">
      <nav className="flex justify-between px-5 md:px-20 py-5  max-w-[1280px] mx-auto ">
        <a
          href="#home"
          className="text-gray-300 text-lg font-bold"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("home");
          }}
        >
          {"<"}
          <span className="text-[#009E67] text-xl">/</span>zzah{">"}
        </a>
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
          <li
            className={`pb-1 ${
              isActive("home") ? "border-b-2 border-[#009E67]" : ""
            }`}
          >
            <a
              href="#home"
              className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                isActive("home") ? "text-white" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("home");
              }}
            >
              Home
            </a>
          </li>
          <li
            className={`pb-1 ${
              isActive("skills") ? "border-b-2 border-[#009E67]" : ""
            }`}
          >
            <a
              href="#skills"
              className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                isActive("skills") ? "text-white" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("skills");
              }}
            >
              Skills
            </a>
          </li>
          <li
            className={`pb-1 ${
              isActive("about") ? "border-b-2 border-[#009E67]" : ""
            }`}
          >
            <a
              href="#about"
              className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                isActive("about") ? "text-white" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("about");
              }}
            >
              About
            </a>
          </li>
          <li
            className={`pb-1 ${
              isActive("project") ? "border-b-2 border-[#009E67]" : ""
            }`}
          >
            <a
              href="#project"
              className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                isActive("project") ? "text-white" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("project");
              }}
            >
              Projects
            </a>
          </li>
          <li
            className={`pb-1 ${
              isActive("contact") ? "border-b-2 border-[#009E67]" : ""
            }`}
          >
            <a
              href="#contact"
              className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                isActive("contact") ? "text-white" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
        absolute top-20 left-0 w-full bg-[#2A2A2A] p-10
        md:hidden overflow-hidden
        transition-all duration-500 ease-in-out
        ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
      `}
      >
        <ul className="flex flex-col gap-5">
          <li
            onClick={() => handleLinkClick("home")}
            className={`${
              isActive("home")
                ? "text-white border-b-2 "
                : "text-gray-300 hover:text-white"
            }`}
          >
            <a href="#home">Home</a>
          </li>
          <hr className="border-t border-[#009E67] w-full" />
          <li
            onClick={() => handleLinkClick("skills")}
            className={`${
              isActive("skills")
                ? "text-white  pb-1"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <a href="#skills">Skills</a>
          </li>
          <hr className="border-t border-[#009E67] w-full" />
          <li
            onClick={() => handleLinkClick("about")}
            className={`${
              isActive("about")
                ? "text-white  pb-1"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <a href="#about">About</a>
          </li>
          <hr className="border-t border-[#009E67] w-full" />
          <li
            onClick={() => handleLinkClick("project")}
            className={`${
              isActive("project")
                ? "text-white pb-1"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <a href="#project">Projects</a>
          </li>
          <hr className="border-t border-[#009E67] w-full" />
          <li
            onClick={() => handleLinkClick("contact")}
            className={`${
              isActive("contact")
                ? "text-white pb-1"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
