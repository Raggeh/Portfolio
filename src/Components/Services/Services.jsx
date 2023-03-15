import React from "react";
import Card from "../Card/Card";
import './Services.css';
import Resume from './Resume.pdf';
import HeartEmoji from "../../Images/HeartEmoji.png";
import GlassEmoji from "../../Images/GlassEmoji.png";

const Services = () => {
  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span> My Awesome!</span>
        <span>Services </span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Veniam, pariatur! Ipsum, consectetur quas. <br />
          Nostrum nam, animi quaerat vel vero itaque soluta debitis <br />
          aspernatur impedit, ut accusantium ullam id rerum! Adipisci!
        </span>
        <a href={Resume} download>
          <button className="button s-btn"> Download CV </button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}>
          
        </div>
      </div>
      {/* The Right Side */}

      <div className="cards">
        <div style={{ left: "20rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Photoshop , Adobe, Adobe Illustrator, Adobe XD "}
          />
        </div>
        {/* 2nd Card */}
        <div style={{ top: "16rem", left: "-4rem" }}>
          <Card
            emoji={GlassEmoji}
            heading={"Developer"}
            detail={"Html , Css, JavaScript, Reaact Js "}
          />
        </div>
        <div style={{ top: "25rem", left: "20rem" }}>
          <Card
            emoji={GlassEmoji}
            heading={"Programmer"}
            detail={"Java, C#, Visual Basic "}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
