import React from "react";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import tailwind from "../assets/img/tailwind.png";
import react from "../assets/img/react.png";
import bootstrap from "../assets/img/bootstrap.png";
import reactrouter from "../assets/img/react-router.png";
import vs from "../assets/img/Visual_Studio.png";
import chrome from "../assets/img/chrome.png";
import chatgpt from "../assets/img/chatgpt.png";
import vercel from "../assets/img/vercel.png";
import github from "../assets/img/github.png";
import figma from "../assets/img/figma.png";
import firebase from "../assets/img/firebase.png";
import gsap from "../assets/img/gsap.png";
import AI from "../assets/img/AI.png";
import postman from "../assets/img/postman.png";
import typescript from "../assets/img/typescript.png";
import redux from "../assets/img/redux.png";
import next from "../assets/img/next.png";
import shadcn from "../assets/img/shadcn.png";
import node from "../assets/img/node.png";
import express from "../assets/img/express.png";
import mongodb from "../assets/img/mongoos.png";

const TechStack = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-inherit py-20  ">
      <div className="my-20">
        <div className="text-white text-center mb-10">
          <h1 className="font-bold text-3xl">My Tech Stack</h1>
          <p className="text-sm text-gray-300 my-4">
            Technologies I've been Working with{" "}
          </p>
        </div>
        <div className="my-10 flex flex-wrap px-52 gap-x-20  gap-y-5 justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={html} alt="" className="w-[80px]" />
            <p className="text-white font-bold text-xl">Html</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={css} alt="" className="w-[80px]" />
            <p className="text-white font-bold text-xl">CSS</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={js} alt="" className="w-[70px]" />
            <p className="text-white font-bold text-xl">Javascript</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={tailwind} alt="" className="w-[80px]" />
            <p className="text-white font-bold text-xl">Tailwind</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <img src={react} alt="" className="w-[80px]" />
            <p className="text-white font-bold text-xl">ReactJS</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={next} alt="" className="w-[70px]" />
            <p className="text-white font-bold text-xl">NextJS</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={shadcn} alt="" className="w-[70px]" />
            <p className="text-white font-bold text-xl">Shadcn</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={bootstrap} alt="" className="w-[70px]" />
            <p className="text-white font-bold text-xl">Bootstrap</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={redux} alt="" className="w-[70px]" />
            <p className="text-white font-bold text-xl">ReduxToolkit</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={reactrouter} alt="" className="w-[70px]" />
            <p className="text-white font-bold text-xl">React-Router</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={firebase} alt="" className="w-[70px]" />
            <p className="text-white font-bold text-xl">Firebase</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={AI} alt="" className="w-[70px]" />
            <p className="text-white font-bold text-xl">AI</p>
          </div>
        </div>
      </div>
      <hr />

      {/* tools and softarwe */}
      <div className="my-20">
        <div className="text-white text-center mb-10">
          <h1 className="font-bold text-3xl">Tools and Software</h1>
          <p className="text-sm text-gray-300 my-4">
            My core stack + emerging technologies I'm exploring{" "}
          </p>
        </div>
        <div className="my-10 flex flex-wrap px-52 gap-x-20  gap-y-5 justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={vs} alt="" className="w-[70px]" />
            <p className="text-white font-bold text-xl">VS code</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={chrome} alt="" className="w-[70px]" />
            <p className="text-white font-bold text-xl">Chrome</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={chatgpt} alt="" className="w-[70px]" />
            <p className="text-white font-bold text-xl">ChatGpt</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={vercel} alt="" className="w-[90px]" />
            <p className="text-white font-bold text-xl">Vercel</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <img src={figma} alt="" className="w-[60px]" />
            <p className="text-white font-bold text-xl">Figma</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={github} alt="" className="w-[70px]" />
            <p className="text-white font-bold text-xl">Github</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={postman} alt="" className="w-[66px]" />
            <p className="text-white font-bold text-xl">Postman</p>
          </div>
        </div>
      </div>

      {/* Technologies that i have still learning */}
      <div className="my-20">
        <div className="text-white text-center mb-10">
          <h1 className="font-bold text-3xl">
            Tech Stack & Continuous Learning
          </h1>
          <p className="text-sm text-gray-300 my-4">
            Actively expanding my skills in emerging technologies{" "}
          </p>
        </div>
        <div className="my-10 flex flex-wrap px-52 gap-x-20  gap-y-5 justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={node} alt="" className="w-[70px]" />
            <p className="text-white font-bold text-xl">NodeJS</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={express} alt="" className="w-[80px]" />
            <p className="text-white font-bold text-xl">ExpressJS</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={mongodb} alt="" className="w-[70px]" />
            <p className="text-white font-bold text-xl">Mongoos</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={typescript} alt="" className="w-[70px]" />
            <p className="text-white font-bold text-xl">TypeScript</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <img src={gsap} alt="" className="w-[60px]" />
            <p className="text-white font-bold text-xl">GSAP</p>
          </div>
        </div>
      </div>
    </div>

    // Tools and software
  );
};

export default TechStack;
