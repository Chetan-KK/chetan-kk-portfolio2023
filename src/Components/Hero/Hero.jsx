import React, { useContext } from "react";
import Connect from "../Connect/Connect";
import "./Hero.css";
import myImg from "/me.png";
import Tilt from "react-parallax-tilt";
import Typer from "react-text-typist";
import Lottie from "lottie-react";
import arrowDarkJson from "../../assets/animLogos/arrowDark.json";
import arrowLightJson from "../../assets/animLogos/arrowLight.json";
import { ThemeContext } from "../../Context/ThemeContex";

function Hero(props) {
  const { mode } = useContext(ThemeContext);

  return (
    <div className="Hero flex" id="hero">
      <div className="left">
        <div className="heading">Welcome to my 2023 Portfolio </div>
        <div className="main-titles">
          <div className="main-title">
            Hello, I'm <b>Chetan Khulage</b>
            {mode == "dark" ? (
              <Lottie
                className="animArrow"
                animationData={arrowDarkJson}
                loop={true}
              />
            ) : (
              <Lottie
                className="animArrow"
                animationData={arrowLightJson}
                loop={true}
              />
            )}
          </div>
          <Typer
            cursorClassName="typer-cursor"
            className="main-title"
            cursorBlinkSpeed={500}
            sentences={[
              "Full-stack Developer",
              "THREE JS developer",
              "React Developer",
              "Web Designer",
              "UI/UX Designer",
              "UI/UX Developer",
              "MERN-stack Developer",
              "React THREE Fiber",
              "Web Motion Designer",
            ]}
            loop={true}
          />
        </div>
        <div className="sub-heading">
          i love to work on front-end of web and i mostly work with THREE js for
          3D web development, i have worked on web development from around 3
          years
        </div>
        <Connect />
      </div>
      <div className="right">
        {props.isTilt ? (
          <Tilt
            perspective={1000}
            glareEnable={true}
            tiltReverse={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={1}
            gyroscope={false}
            glarePosition={"all"}
            glareMaxOpacity={0.05}
            glareColor="white"
            glareBorderRadius="10px"
          >
            <div className="imgWrapper">
              <img src={myImg} alt="" />
            </div>
          </Tilt>
        ) : (
          <div className="imgWrapper">
            <img src={myImg} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
