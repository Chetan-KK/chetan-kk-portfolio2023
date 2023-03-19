import React from "react";
import Connect from "../Connect/Connect";
import "./Hero.css";
import myImg from "/me.png";
import Tilt from "react-parallax-tilt";

function Hero() {
  return (
    <div className="Hero flex" id="hero">
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
        <Connect />
      </div>
      <div className="right">
        <Tilt
          perspective={1000}
          glareEnable={true}
          scale={1}
          gyroscope={true}
          glarePosition={"all"}
          glareMaxOpacity={0.05}
          glareColor="white"
          glareBorderRadius="10px"
        >
          <div className="imgWrapper">
            <img src={myImg} alt="" />
          </div>
        </Tilt>
      </div>
    </div>
  );
}

export default Hero;
