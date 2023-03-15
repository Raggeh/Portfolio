import React from "react";
import Toogle from "../Toogle/Toogle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Contact from "../Contact/Contact";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
          <a href="/"> Raggeh</a>
        </div>
        <span className="toogle">
          <Toogle />
        </span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none"  }} >
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li> Home </li>
            </Link>

            <Link spy={true} to="Services" smooth={true}>
              <li> Services </li>
            </Link>

            <Link spy={true} to="Experience" smooth={true}>
              <li> Experience </li>
            </Link>

            <Link spy={true} to="Aboutme" smooth={true}>
              <li> About </li>
            </Link>
          </ul>
        </div>
        <button className="button n-btn"> Contact me </button>
      </div>
    </div>
  );
};

export default Navbar;
