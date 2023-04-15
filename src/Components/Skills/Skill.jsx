import React from "react";

function Skill(props) {
  return (
    <div className="Skill link">
      <a href={props.link} target="_blank">
        <img
          className="skill-img"
          src={props.imgLink}
          alt={props.name}
          height="50"
        />
      </a>
    </div>
  );
}

export default Skill;
