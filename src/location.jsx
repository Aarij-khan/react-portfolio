import React from "react";
import GoogleMapReact from 'google-map-react';
import Navbar from "./navbar";
function Location() {
    const AnyReactComponent = ({ text }) => <div className="text-white font-bold text-xl">{text}</div>;

    const defaultProps = {
        center: {
          lat: 	24.8966,
          lng: 	67.1847
        },
        zoom: 15
      };
  return (
    <div className="bg-gray-700 pb-4">
        <Navbar/>
        <div style={{ height: '85vh', width: '80%',margin:"0 auto",marginTop:15 ,borderRadius:"16px"}}>
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
  )
}

export default Location