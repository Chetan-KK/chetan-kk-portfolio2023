import React, { useContext } from "react";
import Connect from "../Connect/Connect";
import "./Footer.css";
import logo from "/favicon.svg";
import heartIcon from "/iconsImg/heart.png";

function Footer() {
  return (
    <div className="Footer flex">
      <img src={heartIcon} alt="" className="imgIcon heartIcon" />
      <div className="logo flex">
        <img src={logo} alt="icon" />
        &copy; 2023. All rights reserved by
        <a
          href="https://www.linkedin.com/in/chetan-khulage/"
          className="link sign"
        >
          Chetan Khulage
        </a>
      </div>
      <Connect />
    </div>
  );
}

export default Footer;
