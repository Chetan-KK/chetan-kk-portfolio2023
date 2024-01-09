import { useEffect } from "react";
import React, { useState } from "react";

import "./Skills.css";

import Skill from "./Skill";
import trophyIcon from "/iconsImg/trophy.png";
import fetchSkills from "../../Utils/GetSkills";

function Skills() {
  const [skills, setSkills] = useState();

  const [row1Pos, setRow1Pos] = useState(0);
  const [row2Pos, setRow2Pos] = useState(0);

  const getSkills = async () => {
    setSkills(await fetchSkills());
  };

  useEffect(() => {
    getSkills();
    tick();
  }, []);

  const devider = 50;

  const tick = () => {
    setRow1Pos((prev) => {
      if (prev / devider == -100) {
        return Math.abs(prev);
      }
      return --prev;
    });

    setRow2Pos((prev) => {
      if (prev / devider == -200) {
        return 0;
      }
      return --prev;
    });

    window.requestAnimationFrame(() => {
      tick();
    });
  };

  return (
    <div className="Skills" id="skills">
      <div className="main-title">
        <img src={trophyIcon} alt="" className="imgIcon trophyIcon" />
        Skills
      </div>
      <div className="heading">
        <b>Technologies I often play with</b>
      </div>
      <div className="all-skills flex">
        <div className="section">
          <ul>
            <li className="button" title="it's not a button">
              Full-stack Web Developer
            </li>
            <li className="button" title="it's not a button">
              MERN-stack Developer
            </li>
            <li className="button" title="it's not a button">
              Web Designer
            </li>
          </ul>
        </div>
        <div className="section">
          <ul>
            <li className="button" title="it's not a button">
              UI/UX Developer/Designer
            </li>
            <li className="button" title="it's not a button">
              THREE JS developer
            </li>
            <li className="button" title="it's not a button">
              React THREE Fiber
            </li>
          </ul>
        </div>
      </div>
      <div className="skills-row flex">
        {skills ? (
          <>
            {" "}
            <div
              className="row-1 flex"
              style={{ transform: `translateX(${row1Pos / devider}%)` }}
            >
              {skills.map((skill) => (
                <Skill
                  key={skill.name}
                  link={skill.link}
                  imgLink={skill.imgLink}
                  name={skill.name}
                />
              ))}
            </div>
            <div
              className="row-2 flex"
              style={{ transform: `translateX(${row2Pos / devider}%)` }}
            >
              {skills.map((skill) => (
                <Skill
                  key={skill.name}
                  link={skill.link}
                  imgLink={skill.imgLink}
                  name={skill.name}
                />
              ))}
            </div>{" "}
          </>
        ) : (
          <div className="small-loader"></div>
        )}
      </div>
    </div>
  );
}

export default Skills;
