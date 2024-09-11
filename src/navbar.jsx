import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./slider.css";
import { ImCross } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaServicestack } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { MdContacts } from "react-icons/md";

function Navbar() {
  const [isShow, setShow] = useState(false);
  return (
    <div className="h-[70px] w-full bg-slate-900 flex items-center justify-between ">
      <div>
        <h1 className="text-white text-2xl font-serif ml-2 sm:ml-4">
          Aarij Dev
        </h1>
      </div>

      <div className="text-white sm:flex gap-6  text-xl hidden sm:w-[85%] sm:justify-end ">
        <Link to={"/"}>
          <h3 className="font-poppins">Home</h3>
        </Link>
        <Link to={"/portfolio"}>
          <h3 className="font-poppins">portfolio</h3>
        </Link>
        <Link to={"/location"}>
          <h3 className="font-poppins">Location</h3>
        </Link>
        <Link to={"/about"}>
          <h3 className="font-poppins">About</h3>
        </Link>
      </div>
        <div className="sm:hidden  ml-[50%]">
          <span
            className="text-white text-2xl "
            onClick={() => setShow(!isShow)}
          >
            {isShow ? (
              <span>
                <ImCross />
              </span>
            ) : (
              <span>
                <FaBars />
              </span>
            )}
          </span>
        </div>
      {/* slider start */}
      <div className="mt-[-10px]">
        <div className={`zoomIn ${isShow ? "zoomOut" : ""}  sm:hidden block  `}>
          <div className="w-full flex justify-end">
            <button
              onClick={() => setShow(false)}
              className="text-xl  flex justify-end mt-2 mr-2"
            >
              <ImCross />
            </button>
          </div>
          <div className="h-[100vh] w-full ml-4 ">
            <ul className="mt-5">
              <h3 className=" flex  items-center gap-3 text-xl text-white font-mono  mt-1">
                <span className="text-black">
                  <FaHome />
                </span>
                Home
              </h3>
              <h3 className=" flex  items-center gap-3 text-xl text-white font-mono mt-1">
                <span className="text-black">
                  <IoMdContact />
                </span>
                About Us
              </h3>
              <h3 className=" flex  items-center gap-3 text-xl text-white font-mono mt-1">
                <span className="text-black">
                  <FaServicestack />
                </span>
                Sevices
              </h3>
              <h3 className=" flex  items-center gap-3 text-xl text-white font-mono mt-1">
                <span className="text-black">
                  <FaHandshake />
                </span>
                Schedule
              </h3>
              <h3 className=" flex  items-center gap-3 text-xl text-white font-mono mt-1">
                <span className="text-black">
                  <MdContacts />
                </span>
                Contact
              </h3>
            </ul>
          </div>
        </div>
      </div>
      {/* slider end */}
    </div>
  );
}

export default Navbar;
