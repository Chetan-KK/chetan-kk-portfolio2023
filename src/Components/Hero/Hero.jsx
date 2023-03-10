import React from "react";
import "./Hero.css";
import myImg from "/me.png";
import myDarkImg from "/medark.png";

function Hero(props) {
  return (
    <div className="Hero flex">
      <div className="left">
        <div className="heading">Welcome to my 2023 Portfolio </div>
        <div className="main-titles">
          <div className="main-title">
            Hello, I'm <b>Chetan Khulage</b>
          </div>

          <div className="main-title">Full-stack Developer</div>
        </div>
        <div className="sub-heading">
          i love to work on front-end of web and i mostly work with THREE js for
          3D web development, i have worked on web development from around 3
          years
        </div>
        <div className="connect">
          <div className="heading">Connect with me</div>
          <div className="flex">
            <a href="https://github.com/Chetan-KK" className="button">
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/chetan-khulage/"
              className="button"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/c_h_e_t_a_n__k/"
              className="button"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@chetankhulage" className="button">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="right">
        <div className={props.mode === "dark" ? "darkImg" : ""}>
          <img src={myImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
