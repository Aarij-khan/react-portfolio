import Navbar from "./navbar";
import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
        AOS.init({
          duration: 1200,
          once: true,
          offset: 200,
        });
      }, []);
  return (
    <div>
        <Navbar/>
    <div className="flex justify-center items-center w-full  bg-gradient-to-t from-green-900 to-green-600 pb-[63px]">
        <div className=" w-[70%] ">
        <div className="text-center text-white text-5xl  font-poppins mt-10 ">About Us</div>
      <h2 className="text-white text-md sm:text-3xl text-left font-poppins pt-6  "  data-aos="zoom-in">
        Hi, I am Aarij khan. My age is 19 years old .i AM FROM model colony
        karachi.i have one siblings .I have completed my matriculation in 2020
        then i completed intermediate from Govt,degree Malir Cantoment College
        in 2023.In the current situation . i am doing bachelors in Computer
        Science from Federal Urdu University.Moreover,I am doing Bootcamp in Web
        and Application development from Saylani Mass IT Training (SMIT) for 10
        months.We have covered Html, Css, JavaScript, React, tailwind Css, Firebase integration,Git & Github, Api integration, Googlesheet database integration, Bootstrap, flowbite etc.
      </h2>

        </div>
    </div>

    </div>
  );
}

export default About;
