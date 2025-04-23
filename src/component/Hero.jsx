import React from "react";
import bg from "../assets/izzu1.png";
import CV from "../../public/IzzahSalam-CV.pdf";

const Hero = () => {
  return (
    <div className="flex justify-between lg:px-20 px-12 items-center h-screen bg-inherit">
      <div
        id="home"
        className="flex flex-col justify-center items-start md:mt-0 mt-20"
      >
        <p className="text-gray-300  ">Hi There !</p>
        <h1 className="md:text-3xl text-2xl font-bold text-gray-300">
          {" "}
          I am Izzah Salam <br />{" "}
          <span className="md:text-6xl text-5xl text-white">
            Software Engineer
          </span>
        </h1>
        <p className="text-gray-300  mt-4">I make the code simple</p>

        <button className="bg-[#009E67] text-white md:px-4 px-2 py-2 rounded mt-6 ">
          <a href={CV} download="IzzahSalam-CV.pdf">
            Download CV
          </a>
        </button>
        <div className="flex md:gap-5 gap-2 mt-10 text-gray-300 ">
          <p>Connect With me</p>{" "}
          <i class="ri-arrow-right-line animate-arrow font-bold text-xl text-[#009E67]"></i>
          <a href={"https://www.linkedin.com/in/izzah-dev/"} target="_blank">
            <i class="ri-linkedin-box-fill text-white lg:text-2xl  rounded-full p-2 border-2 border-[#009E67]"></i>
          </a>
          <a href={"https://github.com/Izzah-Salam"} target="_blank">
            <i class="ri-github-fill text-white lg:text-2xl rounded-full p-2 border-2 border-[#009E67]"></i>
          </a>
        </div>
      </div>
      <div className="flex justify-center ">
        <img
          src={bg}
          alt=""
          className=" lg:h-[430px] rounded-full border-b-2 border-green-400  lg:block hidden "
        />
      </div>
    </div>
  );
};

export default Hero;
