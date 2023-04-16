import React, { useContext } from "react";
import Connect from "../Connect/Connect";
import "./Footer.css";
import logo from "/favicon.svg";
import heartIcon from "/iconsImg/heart.png";
import { ThemeContext } from "../../Context/ThemeContex";
import logoDarkIcon from "/iconsImg/logoDark.png";
import logoLightIcon from "/iconsImg/logoLight.png";

function Footer() {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <div className="Footer flex">
      <img src={heartIcon} alt="" className="imgIcon heartIcon" />
      <div className="logo flex">
        <img src={logo} alt="icon" />
        &copy; 2023. All rights reserved by
        <a href="https://www.linkedin.com/in/chetan-khulage/" className="link">
          {mode == "dark" ? (
            <img src={logoLightIcon} alt="" style={{ width: "10rem" }} />
          ) : (
            <img src={logoDarkIcon} alt="" style={{ width: "10rem" }} />
          )}
        </a>
      </div>
      <Connect />
    </div>
  );
}

export default Footer;
