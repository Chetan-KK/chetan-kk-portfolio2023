import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./MainProject.css";
import projects from "../../assets/projects";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";

function MainProject() {
  const ProjectId = useParams();

  const [project, setProject] = useState(null);

  useEffect(() => {
    projects.map((p) => {
      if (p.id == ProjectId.id) {
        setProject(p);
      }
    });
  }, []);
  return (
    <motion.div
      initial={{
        opacity: 0,
        transition: { duration: 0.75, ease: "easeOut" },
      }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.75, ease: "easeOut" },
      }}
    >
      {project && (
        <div>
          <Navbar />
          <div className="MainProject">
            <Link to="/">
              <div className="button">Back</div>
            </Link>
            <div className="titles">
              <div className="main-title"># {project.title}</div>
              <div className="heading">
                <b>{project.stack.join(", ")}.</b>
              </div>
            </div>
            <div className="desc">{project.desc}</div>
            <div className="heading sub-title">
              <b>Screenshots</b>
            </div>
            <div className="imgWrapper flex">
              <Tilt
                className="tilt-img"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={900}
                tiltReverse={true}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glarePosition={"all"}
                scale={1}
                transitionSpeed={1000}
                gyroscope={false}
              >
                <img src={project.imgSrc} alt="" />
              </Tilt>
              {project.imgs &&
                project.imgs.map((img) => (
                  <Tilt
                    key={img}
                    className="tilt-img"
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    perspective={900}
                    tiltReverse={true}
                    glareEnable={true}
                    glareMaxOpacity={0.2}
                    glarePosition={"all"}
                    scale={1}
                    transitionSpeed={1000}
                    gyroscope={false}
                  >
                    <img src={img} key={img} alt="" />
                  </Tilt>
                ))}
            </div>
            <div className="buttons">
              <a href={project.link} className="button preview-button">
                Preview{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a href={project.gitLink} className="button preview-button git">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </motion.div>
  );
}

export default MainProject;
