import React from "react";
import bg from "../assets/izzu1.png";

const Hero = () => {
  return (
    <div className="flex justify-between px-20 items-center ">
      <div>
        <p className="text-gray-300  mt-4">Hi There !</p>
        <h1 className="text-3xl font-bold text-gray-300">
          {" "}
          I am Izzah Salam <br />{" "}
          <span className="text-6xl text-white">Software Engineer</span>
        </h1>
        <p className="text-gray-300  mt-4">I make the comple simple</p>

        <button className="bg-[#009E67] text-white px-4 py-2 rounded mt-6 ">
          <a href="/path/to/IzzahSalam-CV.pdf" download="IzzahSalam-CV.pdf">
            Download CV
          </a>
        </button>
        <div className="flex gap-5 mt-10 text-gray-300 ">
          <p>Connect With me</p>{" "}
          <i class="ri-arrow-right-line animate-arrow font-bold text-xl text-[#009E67]"></i>
          <a href={"https://www.linkedin.com/in/izzah-dev/"} target="_blank">
            <i class="ri-linkedin-box-fill text-white text-2xl rounded-full p-2 border-2 border-[#009E67]"></i>
          </a>
          <a href={"https://github.com/Izzah-Salam"} target="_blank">
            <i class="ri-github-fill text-white text-2xl rounded-full p-2 border-2 border-[#009E67]"></i>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-end ">
        <img
          src={bg}
          alt=""
          className=" h-[450px] rounded-full border-b-2 border-green-400 "
        />
      </div>
    </div>
  );
};

export default Hero;
