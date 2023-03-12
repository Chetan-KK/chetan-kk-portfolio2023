import React, { useState } from "react";
import Project from "./Project";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([
    {
      title: "COVID-India Tracker",
      imgSrc: "/covid-project.png",
      disc: "In this project I created an fully functional website/ web-application which can show users information about COVID-19 with dynamic API, users can also see news about COVID which updates daily, users can login and give a test to check they have COVID symptoms or not. It's UI contains two modes dark and light which can be stored into local storage and this can be installed as an application on desktop or mobile device and it's responsive for multiple size displays. ",
      link: "https://chetan-kk.github.io/covid-design",
      gitLink: "https://chetan-kk.github.io/covid-design",
      year: "3-2019",
    },
    {
      title: "Country Founder",
      imgSrc: "/country_founder-project.png",
      disc: "This project is created using REACT JS where user can see details about particular country like it's population, area, spoken languages, regions etc.User can interact with particular country section and see daily news about selected country. ",
      link: "https://chetan-kk.github.io/Country-Founder-React/",
      gitLink: "https://chetan-kk.github.io/Country-Founder-React/",
      year: "12-2019",
    },
    {
      title: "College Management System",
      imgSrc: "/collegeMS-project.png",
      disc: "This Project is created for Ashok polytechnic college to manage Students and Staff of all departments",
      link: "https://github.com/Chetan-KK/Covid-India",
      gitLink: "https://github.com/Chetan-KK/Covid-India",
      year: "4-2019",
    },
    {
      title: "Google Clone",
      imgSrc: "/google_clone-project.png",
      disc: "This project is copy of google search page where user can search for almost anything, Here user can search for either the details or images. Here user can search for either the details or images.",
      link: "https://chetan-kk.github.io/Google-clone-with-API/",
      gitLink: "https://chetan-kk.github.io/Google-clone-with-API/",
      year: "1-2019",
    },
    {
      title: "Google Clone",
      imgSrc: "/google_clone-project.png",
      disc: "This project is copy of google search page where user can search for almost anything, Here user can search for either the details or images. Here user can search for either the details or images.",
      link: "https://chetan-kk.github.io/Google-clone-with-API/",
      gitLink: "https://chetan-kk.github.io/Google-clone-with-API/",
      year: "1-2019",
    },
  ]);
  let key = 0;
  return (
    <div className="Projects" id="projects">
      <div className="main-title">Projects</div>
      <div className="heading">
        <b>Here's some of my projects</b>
      </div>
      <div className="projects  flex">
        {projects.map((project) => (
          <Project
            key={key++}
            imgSrc={project.imgSrc}
            title={project.title}
            desc={project.disc}
            link={project.link}
            gitLink={project.gitLink}
            year={project.year}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
