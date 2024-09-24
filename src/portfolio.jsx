import React, { useEffect } from "react";
import solarpanel from "./assets/solarpanel.png";
import barbershop from "./assets/barbershop.png";
import tudolist from "./assets/tudolist.png";
import calculator from "./assets/calculator.png";
import Navbar from "../src/navbar";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaSearch } from "react-icons/fa";

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
      <Navbar/>
      <h1 className="text-center text-3xl text-white font-bold font-serif pt-10">
        Projects
      </h1>
      <div className="flex mt-10 sm:mt-20 flex-col sm:flex-row gap-10 sm:gap-0 border-2 p-5 mx-8 sm:mx-20 rounded-lg shadow-xl shadow-[red]" data-aos="fade-right">
        <div className="w-full sm:w-1/2 flex justify-center items-center flex-col gap-4 p-6">
          <h1 className="text-3xl uppercase text-white">project # 1</h1>
          <h1 className="text-3xl uppercase text-white">Solar Saver</h1>

          <div className="flex gap-6 items-center pt-10 flex-col sm:flex-row sm:gap-10">
              <Link to={'https://solarsavers.netlify.app/'}>
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
      <div className="flex mt-20 flex-col sm:flex-row gap-10 sm:gap-0 border-2 p-5 mx-8 sm:mx-20 rounded-lg shadow-xl shadow-[red]" data-aos="fade-left">
        <div className="w-full sm:w-1/2 flex justify-center items-center flex-col gap-4 p-6">
          <h1 className="text-3xl uppercase text-white">project # 2</h1>
          <h1 className="text-2xl uppercase text-white">Barber booking</h1>
          <div className="flex gap-6 items-center pt-10 flex-col sm:flex-row sm:gap-10">
             <Link to={'https://barberbook.netlify.app/'}>
            <div className="flex items-center gap-4 focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-green-600">
              <FaSearch className="text-4xl" />
              <div>Check Website</div>
            </div>
             </Link>
            <Link to={"https://github.com/Aarij-khan/Barber-booking-React-Website"}>
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

    
      <div className="flex mt-20 flex-col sm:flex-row gap-10 sm:gap-0 border-2 p-5 mx-8 sm:mx-20 rounded-lg shadow-xl shadow-[red]" data-aos="fade-right">
        <div className="w-full sm:w-1/2 flex justify-center items-center flex-col gap-4 p-6">
          <h1 className="text-3xl uppercase text-white">project # 3</h1>
          <h1 className="text-3xl uppercase text-white">tudo-list</h1>
          <div className="flex gap-6 items-center pt-10 flex-col sm:flex-row sm:gap-10">
             <Link to={'https://tudolistbyak.netlify.app/'}>
            <div className="flex items-center gap-4 focus:outline-none text-white bg-green-900 hover:bg-green-500 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-green-600">
              <FaSearch className="text-4xl" />
              <div>Check Website</div>
            </div>
             </Link>
            <Link to={'https://github.com/Aarij1/tudo-list'}>
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
      
      <div className="mb-10 sm:mx-16 flex mt-20 flex-col sm:flex-row gap-10 sm:gap-0 border-2 p-5 mx-8 sm:mx-20rounded-lg shadow-xl shadow-[red]" data-aos="fade-left">
        <div className="w-full sm:w-1/2 flex justify-center items-center flex-col gap-4 p-6">
          <h1 className="text-3xl uppercase text-white">project # 4</h1>
          <h1 className="text-3xl uppercase text-white">calculator</h1>
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
      <Footer/>
    </div>
  );
}

export default Portfolio;
