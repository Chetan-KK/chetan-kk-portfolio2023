import React, { useEffect, useState } from "react";

import "./Projects.css";

import Project from "./Project";

import fetchProjects from "../../Utils/GetProjects";

function Projects(props) {
  const [projects, setProjects] = useState();

  const getProjects = async () => {
    setProjects(await fetchProjects());
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="Projects" id="projects">
      <div className="main-title">Projects</div>
      <div className="heading">
        <b>Here's some of my projects</b>
      </div>
      <div className="projects flex">
        {projects ? (
          projects.map((project, i) => (
            <Project
              key={i}
              id={i}
              imgSrc={project.imgSrc}
              title={project.title}
              desc={project.desc}
              link={project.link}
              gitLink={project.gitLink}
              year={project.year}
              isInDevelopment={project.isInDevelopment}
              isTilt={props.isTilt}
            />
          ))
        ) : (
          <div className="small-loader"></div>
        )}
      </div>
    </div>
  );
}

export default Projects;
