import React from "react";
import { Link } from "react-router-dom";

function Project(props) {
  return (
    <div className="Project">
      <Link to={`/${props.id}`} className="imgWrapper">
        <img src={props.imgSrc} alt="" />
      </Link>

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
        <a href={props.link} className="button preview-button">
          Preview <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href={props.gitLink} className="button preview-button git">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Project;
