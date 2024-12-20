import React from "react";
import GoogleMapReact from 'google-map-react';
import Navbar from "./navbar";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Footer from "./footer";
function Location() {
    const AnyReactComponent = ({ text }) => <div className="text-white font-bold text-xl">{text}</div>;

    const defaultProps = {
        center: {
          lat: 	24.8966,
          lng: 	67.1847
        },
        zoom: 15
      };
      useEffect(() => {
        AOS.init({
          duration: 1200,
          once: true,
          offset: 200,
        });
      }, []);
  return (
    <div className="bg-[#F4D35E]  ">
        <Navbar/>
      <div className="flex  justify-center items-center w-full">
        <div className="h-[58vh] w-[80%] m-auto mt-[15px] rounded-lg sm:h-[85vh] " data-aos="zoom-in">
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >

        <AnyReactComponent
          lat={24.8966}
          lng={	67.1847}
          text="My Location"
        />
      </GoogleMapReact>
    </div>
      </div>
    <Footer props="mt-6 "/>

    </div>
  )
}

export default Location