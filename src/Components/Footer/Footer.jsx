import React from "react";
import "./Footer.css";

import fb from "../../Images/fb.png";
import twitter from "../../Images/twitter.png";
import instagram from "../../Images/instagram.png";
import linkedIn from "../../Images/linkedIn.png";

const Footer = () => {
  return (
    <div className="footer">
      <span> Wacdarogroups@gmail.com</span>
      <div className="footer-icons">
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
  );
};

export default Footer;
