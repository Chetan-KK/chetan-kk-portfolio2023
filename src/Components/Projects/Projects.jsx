import React, { useState } from "react";

import "./Projects.css";

import Project from "./Project";
import projectsArray from "../../assets/projects";

function Projects(props) {
  const [projects, setProjects] = useState(projectsArray);
  return (
    <div className="Projects" id="projects">
      <div className="main-title">Projects</div>
      <div className="heading">
        <b>Here's some of my projects</b>
      </div>
      <div className="projects flex">
        {projects.map((project, i) => (
          <Project
            key={i}
            id={i}
            imgSrc={project.imgSrc}
            title={project.title}
            desc={project.desc}
            link={project.link}
            gitLink={project.gitLink}
            year={project.year}
            isTilt={props.isTilt}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
