import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import "./MainProject.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import penIcon from "/iconsImg/pen.png";
import fetchProjects from "../../Utils/GetProjects";
import Img from "../Img/Img";
import ImgView from "../ImgView/ImgView";

function MainProject() {
  const ProjectId = useParams();

  const [project, setProject] = useState(null);
  const [activeImg, setActiveImg] = useState(null);

  const getProjects = async () => {
    const allProjects = await fetchProjects();
    setProject(allProjects[ProjectId.id]);
  };

  useEffect(() => {
    getProjects();
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
              <div className="main-title">
                # {project.title}
                <img src={penIcon} alt="" className="imgIcon penIcon" />
              </div>
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
                <Img src={project.imgSrc} />
              </Tilt>
              {project.imgs &&
                project.imgs.map((img, _) => (
                  <Tilt
                    key={_}
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
                    <Img
                      src={img}
                      onClick={() => {
                        setActiveImg(img);
                      }}
                    />
                  </Tilt>
                ))}
            </div>
            <div className="buttons">
              <a
                href={project.link}
                target="_blank"
                className="button preview-button"
              >
                Preview{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              {project.gitLink ? (
                <a
                  href={project.gitLink}
                  target="_blank"
                  className="button preview-button git"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              ) : undefined}
            </div>
          </div>
        </div>
      )}
      <ImgView imgSrc={activeImg} closeImg={setActiveImg} />
      <Footer />
    </motion.div>
  );
}

export default MainProject;
