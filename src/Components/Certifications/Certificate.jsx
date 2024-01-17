import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import Img from "../Img/Img";

function Certificate(props) {
  return (
    <Tilt
      perspective={1000}
      glareEnable={true}
      scale={1}
      tiltEnable={props.isTilt}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      gyroscope={false}
      glarePosition={"all"}
      glareMaxOpacity={0.05}
      glareColor="white"
      glareBorderRadius="10px"
    >
      <div className="Certificate">
        <div className="heading">{props.name}</div>
        <Img src={props.imgSrc} className="img" alt="" />
        {props.credLink ? (
          <a href={props.credLink} className="button" target="_blank">
            credentials{" "}
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        ) : undefined}
      </div>
    </Tilt>
  );
}

export default Certificate;
