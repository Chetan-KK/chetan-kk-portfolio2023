import React, { useState } from "react";
import Skill from "./Skill";
import "./Skills.css";

function Skills() {
  const [skills, setSkills] = useState([
    {
      name: "HTML5",
      link: "https://en.wikipedia.org/wiki/HTML5",
      imgLink:
        "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg",
    },
    {
      name: "CSS3",
      link: "https://www.w3schools.com/css/",
      imgLink:
        "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg",
    },
    {
      name: "JavaScript",
      link: "https://www.javascript.com/",
      imgLink:
        "https://profilinator.rishav.dev/skills-assets/javascript-original.svg",
    },
    {
      name: "Bootstrap",
      link: "https://getbootstrap.com/docs/3.4/javascript/",
      imgLink:
        "https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg",
    },
    {
      name: "Tailwind CSS",
      link: "https://www.tailwindcss.com/",
      imgLink: "https://profilinator.rishav.dev/skills-assets/tailwindcss.svg",
    },
    {
      name: "Sass",
      link: "https://sass-lang.com/",
      imgLink:
        "https://profilinator.rishav.dev/skills-assets/sass-original.svg",
    },
    {
      name: "React",
      link: "https://reactjs.org/",
      imgLink:
        "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg",
    },
    {
      name: "Blender",
      link: "https://www.blender.org/",
      imgLink:
        "https://profilinator.rishav.dev/skills-assets/blender_community_badge_white.svg",
    },
    {
      name: "Adobe XD",
      link: "https://www.adobe.com/in/products/xd.html",
      imgLink: "https://profilinator.rishav.dev/skills-assets/adobexd.png",
    },
    {
      name: "WordPress",
      link: "https://wordpress.com/",
      imgLink: "https://profilinator.rishav.dev/skills-assets/wordpress.png",
    },
    {
      name: "Webpack",
      link: "https://webpack.js.org/",
      imgLink:
        "https://profilinator.rishav.dev/skills-assets/webpack-original.svg",
    },
    {
      name: "Illustrator",
      link: "https://www.adobe.com/in/products/illustrator.html",
      imgLink:
        "https://profilinator.rishav.dev/skills-assets/adobe_illustrator-icon.svg",
    },
    {
      name: "Figma",
      link: "https://www.figma.com/",
      imgLink: "https://profilinator.rishav.dev/skills-assets/figma-icon.svg",
    },
    {
      name: "Photoshop",
      link: "https://www.adobe.com/in/products/photoshop.html",
      imgLink:
        "https://profilinator.rishav.dev/skills-assets/photoshop-plain.svg",
    },
    {
      name: "Chart.js",
      link: "https://www.chartjs.org/",
      imgLink: "https://profilinator.rishav.dev/skills-assets/logo-title.svg",
    },
    {
      name: "MySQL",
      link: "https://www.mysql.com/",
      imgLink:
        "https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg",
    },
    {
      name: "Git",
      link: "https://github.com/",
      imgLink: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg",
    },
    {
      name: "Node.js",
      link: "https://nodejs.org/",
      imgLink:
        "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg",
    },
    {
      name: "Bash",
      link: "https://www.gnu.org/software/bash/",
      imgLink:
        "https://profilinator.rishav.dev/skills-assets/gnu_bash-icon.svg",
    },
    {
      name: "XAMPP",
      link: "https://www.apachefriends.org/",
      imgLink: "https://profilinator.rishav.dev/skills-assets/xampp.png",
    },
    {
      name: "Java",
      link: "https://www.java.com/",
      imgLink:
        "https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg",
    },
  ]);

  return (
    <div className="Skills" id="skills">
      <div className="main-title">Skills</div>
      <div className="heading">
        <b>Technologies I often play with</b>
      </div>
      <div className="all-skills flex">
        <div className="left">
          <ul>
            <li className="button">Full-stack Web Developer</li>
            <li className="button">MERN Developer</li>
            <li className="button">Web Designer</li>
            <li className="button">UI/UX Developer/Designer</li>
            <li className="button">THREE JS developer</li>
            <li className="button">React THREE Fiber</li>
            <li className="button">Web Motion Designer</li>
          </ul>
        </div>
        <div className="right flex">
          {skills.map((skill) => (
            <Skill
              key={skill.name}
              link={skill.link}
              imgLink={skill.imgLink}
              name={skill.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
