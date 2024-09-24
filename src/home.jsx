import React from "react";
import Navbar from "./navbar";
import pic from "./assets/profile.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { FaSquareGit ,FaLinkedin} from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { FaGithub,FaWhatsappSquare ,FaPhoneAlt,FaHtml5,FaReact,FaBootstrap } from "react-icons/fa";
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
    window.location.href = 'tel:+92282183869'; 
  };

  return (
    <div className="bg-green-600 h-screen w-full  overflow-x-hidden">
      <Navbar />
      <div className=" w-full h-[400px] flex gap-10 sm:flex-row   font-semibold mt-16  flex-col  sm:gap-0 ">
        <div
          className=" sm:w-1/2  w-full flex gap-4 justify-center items-center sm:text-4xl text-3xl  flex-col sm:gap-4"
          data-aos="fade-right"
        >
          <h1 className="font-poppins">Hi👋I am Aarij khan</h1>
          <h1 className="font-poppins">Web & App Developer</h1>
          <div className="flex gap-2 sm:gap-10 ">
            <Link to={'https://www.linkedin.com/in/aarij-raza-146364328'}>
          <div className="flex items-center  focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-green-600">
              <FaLinkedin className="text-4xl" />
            </div>
            
            
            </Link>
            <Link to={'https://wa.me/923282183869'}>
            <div className="flex items-center  focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-green-600">
              <FaWhatsappSquare className="text-4xl" />
            </div>
            </Link>
            <div onClick={handleCall}  className="sm:hidden flex items-center  focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-green-600">
              <FaPhoneAlt className="text-4xl" />
            </div>
            <Link to={'https://github.com/Aarij-khan'}>
            <div className="flex items-center  focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-green-600">
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
            className="w-[60%] sm:w-[45%] md:w-[40%]  rounded-xl shadow-xl "
          />
        </div>
      </div>
      
        <h1 className="uppercase text-4xl sm:text-6xl text-white font-poppins  text-center pb-5 mt-40">
          Professional Skillset
        </h1>

        
         <div className="pb-20 mt-10 w-full flex justify-center items-center flex-col bg-gradient-to-t from-green-900 to-green-600 overflow-x-hidden overflow-y-hidden"  >
          <div className="flex gap-10 sm:flex-row flex-col sm:gap-32" >
            <FaHtml5 className="text-[200px] border-2 text-black  shadow-2xl shadow-green-200 p-1 border-green-200 mt-3 " />
            <IoLogoCss3 className="text-[200px]  border-2 text-black  shadow-2xl shadow-green-200 p-1 border-green-200 mt-3" />
            <RiTailwindCssFill className="text-[200px] border-2 text-black  shadow-2xl shadow-green-200 p-1 border-green-200 mt-3 " />
          </div>
          <div className="flex gap-10 sm:flex-row flex-col sm:gap-32 mt-10">
            <FaJs className="text-[200px] border-2 text-black p-1 border-green-200 mt-10 sm:mt-3" />
            <FaReact className="text-[200px] border-2 text-black  shadow-2xl shadow-green-200 p-1 border-green-200 mt-3" />
            <FaBootstrap className="text-[200px] border-2 text-black  shadow-2xl shadow-green-200 p-1 border-green-200 mt-3" />
          </div>
          <div className="flex gap-10 sm:flex-row flex-col mt-10 sm:gap-32">
            <FaGithub className="text-[200px] border-2 text-black  shadow-2xl shadow-green-200 p-1 border-green-200 mt-3" />
            <IoLogoFirebase className="text-[200px] border-2 text-black  shadow-2xl shadow-green-200 p-1 border-green-200 mt-3" />
            <FaSquareGit className="text-[200px] border-2 text-black shadow-2xl shadow-green-200 p-1 border-green-200 mt-3" />
          </div>
          <div className="flex gap-10 sm:flex-row flex-col mt-10 sm:gap-32">
            <TbBrandReactNative className="text-[200px] border-2 text-black  shadow-2xl shadow-green-200 p-1 border-green-200 mt-3" />
            <SiNextdotjs className="text-[200px] border-2 text-black shadow-2xl shadow-green-200 p-1 border-green-200 mt-3" />
          </div>
        </div>
        <Footer/>

        </div>
    
  );
}

export default Home;
