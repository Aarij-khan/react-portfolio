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
      <Navbar />
      <div className="flex justify-center items-center w-full  bg-[#F4D35E] pb-[63px]">
        <div className=" w-[70%] ">
          <div className="text-center text-5xl  font-poppins  font-bold mt-10 ">
            About Us
          </div>
          <h2
            className="text-md sm:text-3xl font-poppins pt-6 w-[320px] sm:w-full -ml-6 sm:ml-0"
            data-aos="zoom-in"
          >
            My name is Aarij Khan, and I am 19 years old. I am from Pakistan,
            Currently, I am pursuing Bachelor's degree in Computer Science from
            Federal Urdu University. In addition, I have completed a Web and
            Mobile Application Development certification from Saylani Mass IT
            Training (SMIT), where I covered HTML, CSS, JavaScript, React, Next
            Js, Tailwind CSS, Firebase integration,Node js, Express, Git &
            GitHub, API integration, Google Sheets database integration,
            Bootstrap, Flowbite, React native, trello, slack and more animation
            libraries.
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
