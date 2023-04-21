import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

function Certificate(props) {
  const [imgLoaded, setImgLoaded] = useState(true);

  function handleImgLoad() {
    setImgLoaded(false);
  }

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
        <img src={props.imgSrc} onLoad={handleImgLoad} className="img" alt="" />
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
