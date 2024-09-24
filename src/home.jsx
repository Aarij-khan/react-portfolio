import React from "react";
import Navbar from "./navbar";
import pic from "./assets/profile.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from 'typewriter-effect';
import { useEffect } from "react";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { FaSquareGit, FaLinkedin } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import {
  FaGithub,
  FaWhatsappSquare,
  FaPhoneAlt,
  FaHtml5,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import Footer from "./footer";
import { Link } from "react-router-dom";
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      offset: 200,
    });
  }, []);
  const handleCall = () => {
    window.location.href = "tel:+92282183869";
  };

  return (
    <div className="bg-[#F4D35E] h-screen w-full  overflow-x-hidden">
      <Navbar />
      <div className=" w-full h-[400px] flex gap-10 sm:flex-row   font-semibold mt-16  flex-col  sm:gap-0 ">
        <div
          className=" sm:w-1/2  w-full flex gap-4 justify-center items-center sm:text-4xl text-3xl  flex-col sm:gap-4"
          data-aos="fade-right"
        >
          <h1 className="font-poppins">Hi👋I am Aarij khan</h1>
          <h1 className="font-poppins mt-2">
            <Typewriter
              options={{
                strings: ["Web & App Developer", "Software engineer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="flex gap-2 sm:gap-10 ">
            <Link to={"https://www.linkedin.com/in/aarij-raza-146364328"}>
              <div className="flex items-center  focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:">
                <FaLinkedin className="text-4xl" />
              </div>
            </Link>
            <Link to={"https://wa.me/923282183869"}>
              <div className="flex items-center  focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:">
                <FaWhatsappSquare className="text-4xl" />
              </div>
            </Link>
            <div
              onClick={handleCall}
              className="sm:hidden flex items-center  focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:"
            >
              <FaPhoneAlt className="text-4xl" />
            </div>
            <Link to={"https://github.com/Aarij-khan"}>
              <div className="flex items-center  focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:">
                <FaGithub className="text-4xl" />
              </div>
            </Link>
          </div>
        </div>
        <div
          className="text-black  sm:w-1/2  w-full flex gap-16 justify-center items-center"
          data-aos="fade-left"
        >
          <img
            src={pic}
            alt="pic"
            className="w-[65%] h-[82%]  md:w-[50%] md:h-[70%] lg:w-[42%] lg:h-[70%] object-cover rounded-full shadow-xl"
          />
        </div>
      </div>

      <h1 className="uppercase text-4xl sm:text-6xl font-poppins font-bold  text-center pb-5 mt-40">
        Professional Skillset
      </h1>

      <div className="pb-20 mt-10 w-full flex justify-center items-center flex-col bg-[#F4D35E] overflow-x-hidden overflow-y-hidden">
        <div className="flex gap-10 sm:flex-row flex-col sm:gap-32">
          <FaHtml5 className="text-[200px] border-2 text-black  shadow-xl  p-1 border-black mt-3 " />
          <IoLogoCss3 className="text-[200px]  border-2 text-black  shadow-xl  p-1 border-black mt-3" />
          <RiTailwindCssFill className="text-[200px] border-2 text-black  shadow-xl  p-1 border-black mt-3 " />
        </div>
        <div className="flex gap-10 sm:flex-row flex-col sm:gap-32 mt-10">
          <FaJs className="text-[200px] border-2 text-black p-1 border-black mt-10 sm:mt-3" />
          <FaReact className="text-[200px] border-2 text-black  shadow-xl  p-1 border-black mt-3" />
          <FaBootstrap className="text-[200px] border-2 text-black  shadow-xl shadow-xl-700 p-1 border-black mt-3" />
        </div>
        <div className="flex gap-10 sm:flex-row flex-col mt-10 sm:gap-32">
          <FaGithub className="text-[200px] border-2 text-black  shadow-xl  p-1 border-black mt-3" />
          <IoLogoFirebase className="text-[200px] border-2 text-black  shadow-xl  p-1 border-black mt-3" />
          <FaSquareGit className="text-[200px] border-2 text-black shadow-xl p-1 border-black mt-3" />
        </div>
        <div className="flex gap-10 sm:flex-row flex-col mt-10 sm:gap-32">
          <TbBrandReactNative className="text-[200px] border-2 text-black  shadow-xl  p-1 border-black mt-3" />
          <SiNextdotjs className="text-[200px] border-2 text-black shadow-xl  p-1 border-black mt-3" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
