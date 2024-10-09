import React, { useEffect } from "react";
import solarpanel from "./assets/solarpanel.png";
import barbershop from "./assets/barbershop.png";
import tudolist from "./assets/tudolist.png";
import calculator from "./assets/calculator.png";
import Navbar from "../src/navbar";
import blood from "./assets/bloodbank.mp4"
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaSearch } from "react-icons/fa";
import img from './assets/FITNESS APP BANNER.png'
import image from './assets/FOOD DELIVERY BANNER.png'

import Footer from "./footer";

function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      offset: 200,
    });
  }, []);
  return (
    <div className="w-full bg-[#F4D35E] overflow-x-hidden">
      <Navbar />
      <h1 className="text-center text-3xl text-white font-bold font-serif pt-10">
        Projects
      </h1>






      <div
        className="sm:h-[380px] flex mt-10 sm:mt-20 flex-col sm:flex-row gap-10 sm:gap-0 border-2 p-5 mx-8 sm:mx-20 rounded-lg shadow-xl shadow-[red]"
        data-aos="fade-left"
      >
        <div className="w-full sm:w-1/2  flex justify-center items-center flex-col gap-4 p-6">
          <h1 className="text-3xl uppercase text-white">project # 1</h1>
          <h1 className="sm:text-3xl  text-2xl uppercase font-bold   text-gray-900">Fitness App</h1>

          <div className="flex gap-6 items-center pt-10 flex-col sm:flex-row sm:gap-10">
            <Link
              to={
                'https://www.linkedin.com/posts/aarij-raza-146364328_task-6-completed-i-developed-animated-activity-7246484500421971968-qTw_?utm_source=share&utm_medium=member_desktop'
              }
            >
              <div className="flex items-center gap-10 focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-green-600">
                <FaSearch className="text-4xl" />
                <div>Visit App</div>
              </div>
            </Link>
         
          </div>
        </div>
        <div className="w-full sm:w-1/2    flex justify-center items-center">
              <img src={img} className="sm:h-full sm:w-[36vw] lg:w-[30vw]   object-cover" />
        </div>
      </div>

      <div
        className="sm:h-[380px] flex mt-10 sm:mt-20 flex-col sm:flex-row gap-10 sm:gap-0 border-2 p-5 mx-8 sm:mx-20 rounded-lg shadow-xl shadow-[red]"
        data-aos="fade-left"
      >
        <div className="w-full sm:w-1/2  flex justify-center items-center flex-col gap-4 p-6">
          <h1 className="text-3xl uppercase text-white">project # 2</h1>
          <h1 className="sm:text-3xl  text-2xl uppercase font-bold text-center  text-gray-900">Restaurant Food App</h1>

          <div className="flex gap-6 items-center pt-10 flex-col sm:flex-row sm:gap-10">
            <Link
              to={
                'https://www.linkedin.com/posts/aarij-raza-146364328_i-have-completed-task-7-built-a-restaurant-activity-7249601850520301568-JViL?utm_source=share&utm_medium=member_android'
              }
            >
              <div className="flex items-center gap-10 focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-green-600">
                <FaSearch className="text-4xl" />
                <div>Visit App</div>
              </div>
            </Link>
            
          </div>
        </div>
        <div className="w-full sm:w-1/2    flex justify-center items-center">
              <img src={image} className="sm:h-full sm:w-[36vw] object-cover" />
        </div>
      </div>
      <div
        className="sm:h-[380px] flex mt-10 sm:mt-20 flex-col sm:flex-row gap-10 sm:gap-0 border-2 p-5 mx-8 sm:mx-20 rounded-lg shadow-xl shadow-[red]"
        data-aos="fade-left"
      >
        <div className="w-full sm:w-1/2  flex justify-center items-center flex-col gap-4 p-6">
          <h1 className="text-3xl uppercase text-white">project # 3</h1>
          <h1 className="sm:text-3xl  text-2xl uppercase font-bold text-center  text-gray-900">Blood bank App</h1>

          <div className="flex gap-6 items-center pt-10 flex-col sm:flex-row sm:gap-10">
            <Link
              to={
                "https://www.linkedin.com/posts/aarij-raza-146364328_task-4-completed-i-developed-a-blood-bank-activity-7244069654111952896-kYe5?utm_source=share&utm_medium=member_desktop"
              }
            >
              <div className="flex items-center gap-10 focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-green-600">
                <FaSearch className="text-4xl" />
                <div>Visit App</div>
              </div>
            </Link>
            
          </div>
        </div>
        <div className="w-full sm:w-1/2    flex justify-center items-center">
        <video  controls autoPlay muted
          className="w-[100%] h-[300px] sm:w-full sm:h-[100%]">
            <source src={blood} type="video/webm" />
          </video>
        </div>
      </div>






      {/* 2 box start */}
      <div
        className="flex mt-10 sm:mt-20 flex-col sm:flex-row gap-10 sm:gap-0 border-2 p-5 mx-8 sm:mx-20 rounded-lg shadow-xl shadow-[red]"
        data-aos="fade-right"
      >
        <div className="w-full sm:w-1/2 flex justify-center items-center flex-col gap-4 p-6">
          <h1 className="text-3xl uppercase text-white">project # 4</h1>
          <h1 className="text-3xl uppercase font-bold   text-gray-900">Solar Saver</h1>

          <div className="flex gap-6 items-center pt-10 flex-col sm:flex-row sm:gap-10">
            <Link to={"https://solarsavers.netlify.app/"}>
              <div className="flex items-center gap-4 focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-green-600">
                <FaSearch className="text-4xl" />
                <div>Check Website</div>
              </div>
            </Link>
            <Link to={"https://github.com/Aarij-khan/Solar-saver"}>
              <div className="flex items-center gap-4 focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-green-600">
                <FaGithub className="text-4xl text-white" />
                <div>Check Github</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <img
            src={solarpanel}
            alt="solarpanel"
            className="w-[100%] sm:w-[80%] rounded-xl"
          />
        </div>
      </div>
      <div
        className="flex mt-20 flex-col sm:flex-row gap-10 sm:gap-0 border-2 p-5 mx-8 sm:mx-20 rounded-lg shadow-xl shadow-[red]"
        data-aos="fade-left"
      >
        <div className="w-full sm:w-1/2 flex justify-center items-center flex-col gap-4 p-6">
          <h1 className="text-3xl uppercase text-white">project # 5</h1>
          <h1 className="text-2xl uppercase font-bold   text-gray-900">Barber booking</h1>
          <div className="flex gap-6 items-center pt-10 flex-col sm:flex-row sm:gap-10">
            <Link to={"https://barberbook.netlify.app/"}>
              <div className="flex items-center gap-4 focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-green-600">
                <FaSearch className="text-4xl" />
                <div>Check Website</div>
              </div>
            </Link>
            <Link
              to={"https://github.com/Aarij-khan/Barber-booking-React-Website"}
            >
              <div className="flex items-center gap-4 focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-green-600">
                <FaGithub className="text-4xl text-white" />
                <div>Check Github</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <img
            src={barbershop}
            alt="solarpanel"
            className="w-[100%] sm:w-[80%] rounded-xl"
          />
        </div>
      </div>

      <div
        className="flex mt-20 flex-col sm:flex-row gap-10 sm:gap-0 border-2 p-5 mx-8 sm:mx-20 rounded-lg shadow-xl shadow-[red]"
        data-aos="fade-right"
      >
        <div className="w-full sm:w-1/2 flex justify-center items-center flex-col gap-4 p-6">
          <h1 className="text-3xl uppercase text-white">project # 6</h1>
          <h1 className="text-3xl uppercase font-bold   text-gray-900">tudo-list</h1>
          <div className="flex gap-6 items-center pt-10 flex-col sm:flex-row sm:gap-10">
            <Link to={"https://tudolistbyak.netlify.app/"}>
              <div className="flex items-center gap-4 focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-green-600">
                <FaSearch className="text-4xl" />
                <div>Check Website</div>
              </div>
            </Link>
            <Link to={"https://github.com/Aarij1/tudo-list"}>
              <div className="flex items-center gap-4 focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-green-600">
                <FaGithub className="text-4xl text-white" />
                <div>Check Github</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <img
            src={tudolist}
            alt="solarpanel"
            className="w-[100%] sm:w-[80%] rounded-xl"
          />
        </div>
      </div>

      <div
        className="mb-10 sm:mx-16 flex mt-20 flex-col sm:flex-row gap-10 sm:gap-0 border-2 p-5 mx-8 sm:mx-20rounded-lg shadow-xl shadow-[red]"
        data-aos="fade-left"
      >
        <div className="w-full sm:w-1/2 flex justify-center items-center flex-col gap-4 p-6">
          <h1 className="text-3xl uppercase text-white">project # 7</h1>
          <h1 className="text-3xl uppercase font-bold   text-gray-900">calculator</h1>
          <div className="flex gap-6 items-center pt-10 flex-col sm:flex-row sm:gap-10">
            <Link to={"https://super-biscochitos-f494a3.netlify.app/"}>
              <div className="flex items-center gap-4 focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-green-600">
                <FaSearch className="text-4xl" />
                <div>Check Website</div>
              </div>
            </Link>
            <Link to={"https://github.com/Aarij-khan/calculator"}>
              <div className=" flex items-center gap-4 focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-green-600">
                <FaGithub className="text-4xl text-white" />
                <div>Check Github</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-1/2  flex justify-center items-center">
          <img
            src={calculator}
            alt="solarpanel"
            className="w-[70%] sm:w-[40%] rounded-xl"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
