import React from "react";
import Connect from "../Connect/Connect";
import "./Footer.css";
import logo from "/favicon.svg";

function Footer() {
  return (
    <div className="Footer flex">
      <div className="logo flex">
        <img src={logo} alt="icon" />
        &copy; 2023. All rights reserved by
        <a href="https://www.linkedin.com/in/chetan-khulage/" className="link">
          @chetankhulage
        </a>
      </div>
      <Connect />
    </div>
  );
}

export default Footer;
