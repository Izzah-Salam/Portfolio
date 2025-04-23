import React from "react";
import Projectdata from "./Data/Projectdata";

const Project = () => {
  //   const projectData = useParams();
  return (
    <div className="pt-32  pb-10 bg-inherit max-w-[1280px] mx-auto ">
      <div id="project" className="text-white text-center mb-10">
        <p className="text-4xl font-bold">Projects</p>
        <p className="text-gray-300 text-sm mt-4 ">
          Projects I've been Working on{" "}
        </p>
      </div>
      <div className="my-10 grid lg:grid-cols-2 grid-cols-1 md:px-28 px-10  gap-10 justify-center items-center">
        {/* <img src="" alt="" className="w-[80px] h-full" />
          <p className="text-white font-bold text-xl">Project 1</p> */}
        {Projectdata.map((project) => {
          return (
            <div
              key={project.id}
              className="flex flex-col justify-center rounded-lg overflow-hidden  gap-3 bg-[#484848]"
            >
              <img
                src={project.image}
                alt=""
                className="w-full h-[300px] object-cover"
              />
              <div className="px-5 ">
                <p className="text-white font-bold text-xl">{project.title}</p>
                <p className="text-gray-300 text-sm">{project.description}</p>
                <ul className="flex gap-2 my-5 flex-wrap ">
                  {project.tech.map((tech) => {
                    return (
                      <p
                        key={tech}
                        className="text-[#009E67] rounded-md py-1 px-2 text-center  capitalize bg-[#93dfc4] text-xs mb-4 font-semibold
    
    "
                      >
                        {tech}
                      </p>
                    );
                  })}
                </ul>
              </div>
              <div className="flex justify-between px-5 mb-5 whitespace-nowrap ">
                <div>
                  <a
                    href={project.code}
                    target="_blank"
                    className=" text-white py-2 rounded mt-6 lg:text-[16px] md:text-[14px] text-xs"
                  >
                    <i class="ri-github-fill mr-2 text-xl"></i>
                    View Code
                  </a>
                </div>
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    className=" text-white px-4 py-2 rounded mt-6 g:text-[16px] md:text-[14px] text-xs "
                  >
                    Live Preview
                    <i class="ri-arrow-right-up-line ml-1 mr-2 text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="md:mt-20 mt-10 flex justify-center items-center   ">
        <a
          href={"https://github.com/Izzah-Salam"}
          target="_blank"
          class
          className="bg-[#009E67] text-white px-4 py-2 rounded md:text-[16px] text-sm"
        >
          More Projects
        </a>
      </div>
    </div>
  );
};

export default Project;
