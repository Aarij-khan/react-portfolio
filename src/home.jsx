import React from "react";
import Navbar from "./navbar";
import pic from "./assets/profile.jpeg";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { FaSquareGit } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      offset: 200,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-green-600 h-screen w-full  overflow-x-hidden">
      <Navbar />
      <div className=" w-full h-[400px] flex gap-10 sm:flex-row   font-semibold mt-16  flex-col  sm:gap-0 ">
        <div
          className="  sm:w-1/2  w-full flex gap-4 justify-center items-center sm:text-4xl text-3xl  flex-col sm:gap-4"
          data-aos="fade-right"
        >
          <h1>Hi👋I am Aarij khan</h1>
          <h1 className="font-mono">Web and App Developer</h1>
        </div>
        <div
          className="text-black  sm:w-1/2  w-full flex gap-16 justify-center items-center"
          data-aos="fade-left"
        >
          <img
            src={pic}
            alt="pic"
            className="w-[50%] sm:w-[45%] md:w-[40%]  rounded-xl shadow-xl"
          />
        </div>
      </div>
      
        <h1 className=" text-6xl text-white font-bold text-center pb-5 sm:mt-20">
          Professional Skillset
        </h1>

        
         <div className="pb-20 mt-10 w-full flex justify-center items-center flex-col bg-gradient-to-t from-green-900 to-green-600 overflow-x-hidden overflow-y-hidden"  >
          <div className="flex gap-10 sm:flex-row flex-col sm:gap-32" >
            <FaHtml5 className="text-9xl border-2 text-black  shadow-2xl shadow-green-200 p-1 border-green-200 mt-3 " />
            <IoLogoCss3 className="text-9xl  border-2 text-black  shadow-2xl shadow-green-200 p-1 border-green-200 mt-3" />
            <RiTailwindCssFill className="text-9xl border-2 text-black  shadow-2xl shadow-green-200 p-1 border-green-200 mt-3 " />
          </div>
          <div className="flex gap-10 sm:flex-row flex-col sm:gap-32 mt-10">
            <FaJs className="text-9xl border-2 text-black p-1 border-green-200 mt-10 sm:mt-3" />
            <FaReact className="text-9xl border-2 text-black  shadow-2xl shadow-green-200 p-1 border-green-200 mt-3" />
            <FaBootstrap className="text-9xl border-2 text-black  shadow-2xl shadow-green-200 p-1 border-green-200 mt-3" />
          </div>
          <div className="flex gap-10 sm:flex-row flex-col mt-10 sm:gap-32">
            <FaGithub className="text-9xl border-2 text-black  shadow-2xl shadow-green-200 p-1 border-green-200 mt-3" />
            <IoLogoFirebase className="text-9xl border-2 text-black  shadow-2xl shadow-green-200 p-1 border-green-200 mt-3" />
            <FaSquareGit className="text-9xl border-2 text-black shadow-2xl shadow-green-200 p-1 border-green-200 mt-3" />
          </div>
          <div className="flex gap-10 sm:flex-row flex-col mt-10 sm:gap-32">
            <TbBrandReactNative className="text-9xl border-2 text-black  shadow-2xl shadow-green-200 p-1 border-green-200 mt-3" />
            <SiNextdotjs className="text-9xl border-2 text-black shadow-2xl shadow-green-200 p-1 border-green-200 mt-3" />
          </div>
        </div>
     

        </div>
    
  );
}

export default Home;
