import React from "react";
import Typewriter from "typewriter-effect";


import "./Intro.css";
import fb from "../../Images/fb.png";
import twitter from "../../Images/twitter.png";
import instagram from "../../Images/instagram.png";
import linkedIn from "../../Images/linkedIn.png";
import circleprofile from "../../Images/circleprofile.png";
import Raggeh from "../../Images/Raggeh.png";


 const Intro = () => {
  return (
    <div className="intro" >
      <div className="i-left">
        <div className="i-name">
          <span> Hy I Am </span>
          <span>
       

            <Typewriter
              options={{
                strings: ["Ahmed Raggeh ", "Student", "Web Developer!", "Frontend Developer!"  , "Junior Programmer"],
                autoStart: true,
                loop: true,
              }}
            />


          </span>
          <span>
            {" "}
            Frontend Developer with middle level of experience in web designing
            and development, producting the quality work.
          </span>
        </div>

        <button className="button i-btn ">Hire me </button>
        <div className="i-icons">
          <a href="https://www.facebook.com/Tiptop143">
            <img src={fb} alt="" />
          </a>
          <a href="https://twitter.com/Raggeh1">
            <img src={twitter} alt="" />
          </a>
          <a href="https://www.instagram.com/raggeh/">
            <img src={instagram} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/ahmed-raggeh-117467145/">
            <img src={linkedIn} alt="" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Raggeh} alt="" />
        <img src={circleprofile} alt="" />
      </div>
    </div>
  );
};

export default Intro;
