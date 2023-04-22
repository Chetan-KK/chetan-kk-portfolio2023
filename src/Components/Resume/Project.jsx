import React from "react";

function Project(props) {
  return (
    <div className="desc">
      <div className="title flex">
        <b>{props.title}</b>
        <div className="stack">{props.stack.join(", ")}.</div>
      </div>
      <div className="info">{props.desc}</div>
      <div className="links">
        Link:{" "}
        <a href={props.link} className="links">
          {props.link}
        </a>
      </div>
      {props.gitLink ? (
        <div className="links">
          Github Link:{" "}
          <a href={props.gitLink} className="links">
            {props.gitLink}
          </a>
        </div>
      ) : undefined}
    </div>
  );
}

export default Project;
