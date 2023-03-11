import React from "react";
import "./connect.css";

function Connect() {
  return (
    <div className="connect">
      <div className="heading">Connect with me</div>
      <div className="buttons flex">
        <a href="https://github.com/Chetan-KK" className="button">
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/chetan-khulage/"
          className="button"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/c_h_e_t_a_n__k/" className="button">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/@chetankhulage" className="button">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>
  );
}

export default Connect;
