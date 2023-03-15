import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./MainProject.css";
import projects from "../../assets/projects";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

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
              <img src={project.imgSrc} alt="" />
              {project.imgs &&
                project.imgs.map((img) => <img src={img} key={img} alt="" />)}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </motion.div>
  );
}

export default MainProject;
