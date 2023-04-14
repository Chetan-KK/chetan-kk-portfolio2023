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
          title="follow me on github"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/chetan-khulage/"
          className="button"
          title="follow me on linkdin"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/c_h_e_t_a_n__k/"
          className="button"
          title="follow me on instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/@chetankhulage"
          className="button"
          title="subscribe me on youtube"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
        <Link to={"resume"} title="see resume">
          <div className="button resume-button">Resume</div>
        </Link>
      </div>
    </div>
  );
}

export default Connect;
