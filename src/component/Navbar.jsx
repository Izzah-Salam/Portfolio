import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className=" flex justify-between px-20 py-5 ">
        <div className="text-gray-300 text-lg font-bold">
          {"<"}
          <span className="text-[#009E67] text-xl">/</span>zzah{">"}
        </div>
        <ul className="flex space-x-10 text-sm">
          <li className="text-gray-300 hover:text-white">Home</li>
          <li className="text-gray-300 hover:text-white">Skills</li>
          <li className="text-gray-300 hover:text-white">About</li>
          <li className="text-gray-300 hover:text-white">Services</li>
          <li className="text-gray-300 hover:text-white">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
