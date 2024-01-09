import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

import starIcon from "/iconsImg/stars.png";

function Project(props) {
  const [imgLoaded, setImgLoaded] = useState(true);

  function handleImgLoad() {
    setImgLoaded(false);
  }

  return (
    <div>
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
        <div className="Project">
          <Tilt
            perspective={1000}
            glareEnable={true}
            scale={1}
            gyroscope={false}
            tiltEnable={props.isTilt}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glarePosition={"all"}
            glareMaxOpacity={0.2}
            glareColor="white"
            glareBorderRadius="5px"
          >
            <img src={starIcon} alt="" className="imgIcon starIcon" />
            <Link to={`/${props.id}`} className="imgWrapper">
              <div className={imgLoaded ? "placeholder" : ""}></div>
              <img
                src={`https://raw.githubusercontent.com/chetan-kk/chetan-kk/main${props.imgSrc}`}
                onLoad={handleImgLoad}
                className="projectImg"
                alt=""
              />
            </Link>
          </Tilt>
          <div className="title flex">
            <Link to={`/${props.id}`} className="link">
              <div className="name">{props.title}</div>
            </Link>
            <div className="year">({props.year})</div>
          </div>
          <div className="desc">
            <Link to={`/${props.id}`}>
              {props.desc.slice(0, 100)} <b>read more...</b>
            </Link>
          </div>
          <div className="buttons">
            <a
              href={props.link}
              target="_blank"
              className="button preview-button"
            >
              Preview <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            {props.gitLink ? (
              <a
                href={props.gitLink}
                target="_blank"
                className="button preview-button git"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            ) : undefined}
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default Project;
