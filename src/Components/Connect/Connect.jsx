import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./connect.css";
import fetchInfo from "../../Utils/GetInfo";

function Connect() {
  const [infoData, setInfoData] = useState();

  const getInfo = async () => {
    const info = await fetchInfo();
    setInfoData(info);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="connect">
      <div className="heading">Connect with me</div>

      {infoData ? (
        <div className="buttons flex">
          <a
            target="_blank"
            href={infoData.links.github}
            className="button"
            title="follow me on github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            target="_blank"
            href={infoData.links.linkedin}
            className="button"
            title="follow me on linkedin"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            target="_blank"
            href={infoData.links.instagram}
            className="button"
            title="follow me on instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            target="_blank"
            href={infoData.links.youtube}
            className="button"
            title="subscribe me on youtube"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <Link to={"resume"} title="see resume">
            <div className="button resume-button">Resume</div>
          </Link>
        </div>
      ) : (
        <div className="small-loader"></div>
      )}
    </div>
  );
}

export default Connect;
