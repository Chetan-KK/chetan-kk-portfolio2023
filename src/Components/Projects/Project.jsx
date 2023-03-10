import React from "react";
import { Link } from "react-router-dom";

function Project(props) {
  return (
    <div className="Project">
      <Link to={`/${props.title}`}>
        <img src={props.imgSrc} alt="" />
      </Link>

      <div className="title flex">
        <Link to={`/${props.title}`} className="link">
          <div className="name">{props.title}</div>
        </Link>
        <div className="year">({props.year})</div>
      </div>
      <div className="desc">
        <Link to={`/${props.title}`}>
          {props.desc.slice(0, 100)} <b>read more...</b>
        </Link>
      </div>
      <div className="buttons">
        <a href={props.link} className="button preview-button">
          Preview <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href={props.gitLink} className="button preview-button git">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Project;
