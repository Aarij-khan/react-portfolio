import Navbar from "./navbar";
import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Footer from "./footer";

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
    <div className="flex justify-center items-center w-full  bg-[#F4D35E] pb-[63px]">
        <div className=" w-[70%] ">
        <div className="text-center text-5xl  font-poppins  font-bold mt-10 ">About Us</div>
      <h2 className="text-md sm:text-3xl font-poppins pt-6 w-[320px] sm:w-full -ml-6 sm:ml-0"  data-aos="zoom-in">
        Hi,My name is Aarij khan. My age is 19 years old .i AM FROM model colony
        karachi.I have one siblings .I have completed my matriculation in 2020
        then i completed intermediate from Govt,degree Malir Cantoment College
        in 2023.In the current situation.I am doing bachelors in Computer
        Science from Federal Urdu University.Moreover,i am doing Bootcamp in Web
        and Application development from Saylani Mass IT Training (SMIT) for 10
        months.We have covered Html, Css, JavaScript, React, tailwind Css, Firebase integration,Git & Github, Api integration, Googlesheet database integration, Bootstrap, flowbite etc.
      </h2>

        </div>
    </div>
      <Footer/>
    </div>
  );
}

export default About;
