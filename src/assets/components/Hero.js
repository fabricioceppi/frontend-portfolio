import React from "react";
import MapMarker from "../icons/MapMarker";
import NavBar from "./NavBar";
import Visuals from "./Visuals";

function Hero(props) {

  return (
    <>
      <section className="hero">
        <NavBar />

        <div className="main-heading">
          <h1 className="white semi-bold medium">{props.name}</h1>
          <h2 className="red  semi-bold big">
            {props.title}
            <br />
            {props.speciality}
          </h2>
          <div className="location">
            <MapMarker />
            <p className="white tiny">{props.location}</p>
          </div>
        </div>
      </section>
      <Visuals />
    </>
  );
}

export default Hero;
