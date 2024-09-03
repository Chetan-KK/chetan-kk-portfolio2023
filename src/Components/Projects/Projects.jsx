import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

import "./Projects.css";

import Project from "./Project";

import fetchProjects from "../../Utils/GetProjects";

function Projects(props) {
  const [projects, setProjects] = useState();
  const [inputFilledCount, setInputFilledCount] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [filterd, setFilterd] = useState([]);

  const getProjects = async () => {
    const allProjects = await fetchProjects();

    setProjects(allProjects);
  };

  useEffect(() => {
    getProjects();
  }, []);

  const handleProjects = (e) => {
    switch (e.target.innerText) {
      case "All":
        setActiveType("all");
        break;
      case "Udemy":
        setActiveType("udemy");
        break;
      case "Great Learning":
        setActiveType("greatLearning");
        break;
      case "Other Certificates":
        setActiveType("others");
        break;
    }
  };

  useEffect(() => {
    setInputFilledCount(searchText.length);

    if (searchText.length > 0) {
      //add filter by stack here
      let filterd = projects.filter((text) =>
        text.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilterd(filterd);
    } else {
      if (searchText.length === 0) {
        setFilterd([]);
      }
    }
  }, [searchText]);

  return (
    <div className="Projects" id="projects">
      <div className="main-title">Projects</div>
      <div className="heading">
        <b>Here's some of my projects</b>
      </div>

      <div className="filter-buttons flex">
        <div className="button" onClick={handleProjects}>
          All
        </div>
        <div className="button" onClick={handleProjects}>
          Next JS
        </div>
        <div className="button" onClick={handleProjects}>
          React JS
        </div>
        <div className="button" onClick={handleProjects}>
          Others
        </div>
        <div className="button" onClick={handleProjects}>
          In development
        </div>
      </div>
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        className="inputWrapper flex"
        perspective={900}
        scale={1}
        tiltReverse={true}
        transitionSpeed={800}
        gyroscope={false}
      >
        <div className={inputFilledCount > 0 ? "tip" : "tip hide"}>
          {filterd.length} results
        </div>
        <input
          className="input"
          type="text"
          name="technology"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search by technologies..."
          required
        />
      </Tilt>
      <div className="projects-list flex">
        {projects ? (
          searchText.length > 0 ? (
            filterd.length === 0 ? (
              <div className="sub-heading">No Projects found</div>
            ) : (
              filterd.map((project, i) => (
                <Project
                  key={i}
                  id={i}
                  imgSrc={project.imgSrc}
                  title={project.title}
                  desc={project.desc}
                  stack={project.stack}
                  link={project.link}
                  gitLink={project.gitLink}
                  year={project.year}
                  isInDevelopment={project.isInDevelopment}
                  isTilt={props.isTilt}
                />
              ))
            )
          ) : (
            projects.map((project, i) => (
              <Project
                key={i}
                id={i}
                imgSrc={project.imgSrc}
                title={project.title}
                desc={project.desc}
                stack={project.stack}
                link={project.link}
                gitLink={project.gitLink}
                year={project.year}
                isInDevelopment={project.isInDevelopment}
                isTilt={props.isTilt}
              />
            ))
          )
        ) : (
          <div className="small-loader"></div>
        )}
      </div>
    </div>
  );
}

export default Projects;
