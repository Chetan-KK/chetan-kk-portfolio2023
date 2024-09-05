import React, { useContext, useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import Typer from "react-text-typist";
import Lottie from "lottie-react";
import gsap from "gsap";

import "./Hero.css";

import Connect from "../Connect/Connect";
import arrowDarkJson from "../../assets/animLogos/arrowDark.json";
import arrowLightJson from "../../assets/animLogos/arrowLight.json";
import { ThemeContext } from "../../Context/ThemeContex";
import fireIcon from "/iconsImg/fire.png";
import fetchInfo from "../../Utils/GetInfo";
import Img from "../Img/Img";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";

function Hero(props) {
  const { mode } = useContext(ThemeContext);

  const [infoData, setInfoData] = useState();
  const [animTitle, setAnimTitle] = useState();

  const getInfo = async () => {
    const info = await fetchInfo();
    setInfoData(info);
    setAnimTitle(info.name);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const handleHoverTextEnter = (e) => {
    gsap.to(e.target, 0.3, {
      y: -25,
      rotate: -50,
      repeat: 0,
    });
  };

  const handleHoverTextLeave = (e) => {
    gsap.to(e.target, 1, {
      rotate: 0,
      y: 0,
      ease: "elastic.out(1, 0.3)",
      repeat: 0,
    });
  };

  return (
    <MaxWidthWrapper className="Hero flex" id="hero">
      <div className="left">
        <div className="heading">Welcome</div>
        <div className="main-titles">
          <div className="main-title flex">
            Hello, I'm
            <b className="flex">
              {animTitle ? (
                <>
                  {animTitle.split("").map((char, i) => (
                    <span
                      key={i}
                      onMouseEnter={handleHoverTextEnter}
                      onMouseLeave={handleHoverTextLeave}
                      className="anim_Title-Char"
                      title="Isn't it cool 😃"
                    >
                      {char == " " ? (
                        <span style={{ margin: "6px" }}></span>
                      ) : (
                        char
                      )}
                    </span>
                  ))}
                </>
              ) : (
                <div className="small-loader"></div>
              )}
            </b>
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
          I love to work on front-end of web and i mostly work with THREE js for
          3D web development, i have worked on web development from around 3
          years
        </div>
        <Connect />
      </div>
      <div className="right">
        <Tilt
          perspective={1000}
          glareEnable={true}
          tiltReverse={true}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          scale={1}
          tiltEnable={props.isTilt}
          gyroscope={false}
          glarePosition={"all"}
          glareMaxOpacity={0.05}
          glareColor="white"
          glareBorderRadius="10px"
        >
          <div className="imgWrapper">
            {infoData ? (
              <>
                <img src={fireIcon} alt="" className="imgIcon fireIcon" />
                <Img
                  className="myImg"
                  title="It's me"
                  src={infoData.profileImg}
                  alt="chetan khulage"
                />
              </>
            ) : (
              <div className="small-loader"></div>
            )}
          </div>
        </Tilt>
      </div>
    </MaxWidthWrapper>
  );
}

export default Hero;
