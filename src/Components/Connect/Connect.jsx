import React from "react";
import "./connect.css";
import { Link } from "react-router-dom";

function Connect() {
  return (
    <div className="connect">
      <div className="heading">Connect with me</div>
      <div className="buttons flex">
        <a
          target="_blank"
          href="https://github.com/Chetan-KK"
          className="button"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/chetan-khulage/"
          className="button"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/c_h_e_t_a_n__k/"
          className="button"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/@chetankhulage"
          className="button"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
        <Link to={"resume"}>
          <div className="button resume-button">Resume</div>
        </Link>
      </div>
    </div>
  );
}

export default Connect;
