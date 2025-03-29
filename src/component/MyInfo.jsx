import React from "react";

const MyInfo = () => {
  return (
    <div className="bg-[#2A2A2A]  px-28 py-10 text-white">
      {/* About Me */}
      <div className="my-10">
        <h1 className="text-6xl font-bold">About Me</h1>
        <p className="text-gray-300 mt-4 leading-7">
          I’m <span className="font-bold">Izzah Salam</span> , a Software
          Engineer specializing in{" "}
          <span className="font-bold uppercase">frontend development </span>{" "}
          with expertise in{" "}
          <span className="font-bold text-[#009E67] uppercase">React JS </span>{" "}
          , and modern UI frameworks like{" "}
          <span className="font-bold text-[#009E67] uppercase">
            Tailwind CSS{" "}
          </span>{" "}
          . Passionate about crafting responsive, high-performance web
          applications, I’m now expanding my skills into{" "}
          <span className="font-bold uppercase">Backend Developement</span> with
          contnious learning{" "}
          <span className="font-bold text-[#009E67] uppercase">
            Node.JS , Express,
          </span>{" "}
          and and{" "}
          <span className="font-bold text-[#009E67] uppercase">Databases </span>{" "}
          (MongoDB, PostgreSQL), to evolve into a full-stack developer.
          Committed to clean code, scalable solutions, and continuous learning,
          I thrive on turning ideas into seamless digital experiences. Let’s
          connect and build something impactful!
        </p>
      </div>
      {/* Work Experince */}
      <div className="my-10">
        <h1 className="text-6xl font-bold">Work Experince</h1>
        <div className="mt-7 flex justify-between ">
          <div>
            <h2 className="text-gray-300 text-2xl mb-4">Web Development </h2>
            <div className="flex">
              <p className="text-gray-300 text-sm">
                <i class="ri-building-fill text-gray-300"> </i> Fastech Systems
              </p>
              <p className="text-gray-300 mx-5 text-sm">
                <i class="ri-map-pin-5-fill text-gray-300"></i> Sukkur, Sindh
              </p>
            </div>
          </div>
          <div>
            <p
              className="bg-[#009E67] 
    rounded-full 
    py-1 
    text-center 
     capitalize
    text-white  
    text-sm
    mb-4 
    
    drop-shadow-[0_0_6px_rgba(0,158,103,0.4)]
    hover:drop-shadow-[0_0_10px_rgba(0,158,103,0.6)]
    transition-all"
            >
              Internship
            </p>
            <p className="text-gray-300 text-sm">Jun 2023 - Sep 2023</p>
          </div>
        </div>
        <hr class="border-t border-gray-300 my-4"></hr>
      </div>
      {/* Education */}
      <div>
        <h1 className="text-6xl font-bold">Education</h1>
        <div className="mt-7 flex justify-between ">
          <div>
            <h2 className="text-gray-300 text-2xl mb-4">
              BS Computer Science{" "}
            </h2>
            <div className="flex">
              <p className="text-gray-300 text-sm">
                <i class="ri-building-fill text-gray-300"></i> IBA University
              </p>
              <p className="text-gray-300 mx-5 text-sm">
                <i class="ri-map-pin-5-fill text-gray-300"></i> Sukkur, Sindh
              </p>
            </div>
          </div>
          <div>
            <p
              className="bg-[#009E67] 
    rounded-full 
    px-3 py-1 
    text-center 
     capitalize
    text-white  
    text-sm
    mb-4 
    
    drop-shadow-[0_0_6px_rgba(0,158,103,0.4)]
    hover:drop-shadow-[0_0_10px_rgba(0,158,103,0.6)]
    transition-all "
            >
              full time
            </p>
            <p className="text-gray-300 text-sm">2020 - 2024</p>
          </div>
        </div>

        <hr class="border-t border-gray-300 my-4"></hr>
        <div className="mt-7 flex justify-between ">
          <div>
            <h2 className="text-gray-300 text-2xl mb-4">
              Full Stack Enigeering Course{" "}
            </h2>
            <div className="flex">
              <p className="text-gray-300 text-sm">
                <i class="ri-building-fill text-gray-300"></i> Sir Saif's
                Academy
              </p>
              <p className="text-gray-300 mx-5 text-sm">
                <i class="ri-map-pin-5-fill text-gray-300"></i> Remote
              </p>
            </div>
          </div>
          <div>
            <p
              className="bg-[#009E67] 
    rounded-full 
    px-3 py-1 
    text-center 
     capitalize
    text-white  
    text-sm
    mb-4 
    
    drop-shadow-[0_0_6px_rgba(0,158,103,0.4)]
    hover:drop-shadow-[0_0_10px_rgba(0,158,103,0.6)]
    transition-all "
            >
              full time
            </p>
            <p className="text-gray-300 text-sm">2024 - 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
