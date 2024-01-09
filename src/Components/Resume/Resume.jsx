import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Resume.css";

import Navbar from "../Navbar/Navbar";
import Project from "./Project";
import resumeIcon from "/iconsImg/resume.png";
import resumePdf from "/chetan_yogesh_khulage_resume.pdf";
import fetchCertificates from "../../Utils/GetCertificates";
import fetchProjects from "../../Utils/GetProjects";
import fetchSkills from "../../Utils/GetSkills";
import fetchInfo from "../../Utils/GetInfo";

function Resume() {
  const handleDownload = (e) => {
    window.print();
  };

  const [width, setWidth] = useState(window.innerWidth);

  const [infoData, setInfoData] = useState();
  const [certificatesData, setCertificatesData] = useState();
  const [projects, setProjects] = useState();
  const [skillsData, setSkillsData] = useState();

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  const getInfo = async () => {
    setInfoData(await fetchInfo());
  };

  const getProjects = async () => {
    setProjects(await fetchProjects());
  };

  const getCertificates = async () => {
    setCertificatesData(await fetchCertificates());
  };

  const getSkills = async () => {
    setSkillsData(await fetchSkills());
  };

  useEffect(() => {
    getInfo();
    getCertificates();
    getProjects();
    getSkills();
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
      <div className="Resume">
        <Navbar />

        <Link to="/" className="backButton">
          <div className="button">Back</div>
        </Link>
        <img src={resumeIcon} alt="" className="imgIcon resumeIcon" />

        <div className="downloadButtons flex">
          <div className="button" onClick={handleDownload}>
            <i className="fa-regular fa-floppy-disk"></i>{" "}
            {width < 750 ? "" : " Download"}
          </div>
          {infoData ? (
            <a
              href={infoData.resumeUrl}
              download
              className="button"
              title="download my original resume"
            >
              <i className="fa-solid fa-download"></i>{" "}
              {width < 750 ? "" : "Original"}
            </a>
          ) : (
            <div className="small-loader"></div>
          )}
        </div>
        <div id="Print">
          <header className="flex header">
            <main>
              <div className="main-title">
                <b>
                  {infoData ? (
                    infoData.name
                  ) : (
                    <div className="small-loader"></div>
                  )}
                </b>
              </div>
              <div className="sub-heading">
                Full-stack, MERN-stack, Three JS Developer
              </div>
              <div className="links flex">
                <a
                  href="https://github.com/Chetan-KK"
                  className="sub-heading socialLink flex"
                >
                  <i className="fa-brands fa-github"></i> Chetan-KK
                </a>
                <a
                  href="https://www.linkedin.com/in/chetan-khulage/"
                  className="sub-heading socialLink flex"
                >
                  <i className="fa-brands fa-linkedin"></i> chetan-khulage
                </a>
              </div>
            </main>
            <div className="contacts flex">
              <div className="contact flex">
                <div className="icon flex">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <a
                  className="info flex sub-heading"
                  href="mailto:chetankhulage350@gmail.com"
                >
                  chetankhulage350@gmail.com
                </a>
              </div>
              <div className="contact flex">
                <div className="icon flex">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <a href="tel:+919284276295" className="info flex sub-heading">
                  +91 92842 76295
                </a>
              </div>
              <div className="contact flex">
                <div className="icon flex">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="info flex sub-heading">
                  Pune, Maharashtra, India.
                </div>
              </div>
            </div>
          </header>
          <hr className="hr" />
          <main className="main flex sub-heading">
            <div className="left">
              {/* Education section */}
              <section>
                <div className="main-title">Education</div>
                <div className="desc">
                  <div className="title">
                    <b>B.E. In Computer Engineering</b>
                  </div>
                  <div className="name">
                    Ajeenkya D. Y. Patil School Of Engineering
                  </div>
                  <div className="marks">Marks: pursuing</div>
                </div>
                <div className="desc">
                  <div className="title">
                    <b>Diploma in Computer Engineering</b>
                  </div>
                  <div className="name">
                    Ashok Institute of Engineering and Technology (Polytechnic),
                    Ashoknagar.
                  </div>
                  <div className="marks">Marks: 87.89%</div>
                </div>
                <div className="desc">
                  <div className="title">
                    <b>S.S.C.</b>
                  </div>
                  <div className="name">
                    Shree Samarth Vidya Mandir, Ahmednagar.
                  </div>
                  <div className="marks">Marks: 68.20%</div>
                </div>
              </section>
              {/* Courses section */}
              <section>
                <div className="main-title">Cources</div>
                <div className="desc">
                  <div className="title">
                    <b>Web Development</b>
                  </div>
                  <div className="name">Qspider-Hadapsar, pune.</div>
                  <div className="marks">HTML, CSS, JAVASCRIPT, REACT.</div>
                </div>
                <div className="desc">
                  <div className="title">
                    <b>JAVASCRIPT</b>
                  </div>
                  <div className="name">W3 School - online.</div>
                  <div className="marks">JAVASCRIPT.</div>
                </div>
                <div className="desc">
                  <div className="title">
                    <b>Three.js Journey</b>
                  </div>
                  <div className="name">Three.js Journey by Bruno Simon</div>
                  <div className="marks">THREE JS, REACT-THREE-FIBER.</div>
                </div>
                <div className="desc">
                  <div className="title">
                    <b>Python Development</b>
                  </div>
                  <div className="name">Qspider-Hadapsar, pune.</div>
                  <div className="marks">PYTHON, OOPS.</div>
                </div>
              </section>
              <section>
                <div className="main-title">Technologies</div>
                <ul className="techs">
                  {skillsData ? (
                    <>
                      {skillsData.map((tech) => (
                        <li className="tech" key={tech.name}>
                          {tech.name}
                          <img
                            src={tech.imgLink}
                            alt={tech.name}
                            className="techImg"
                          />
                        </li>
                      ))}
                    </>
                  ) : (
                    <div className="small-loader"></div>
                  )}
                </ul>
              </section>
              <section>
                <div className="main-title">Certifications</div>
                {certificatesData ? (
                  <>
                    {Object.keys(certificatesData).map((key, i) => (
                      <ul key={i} className="certificateList">
                        <b>{key}</b>
                        {certificatesData[key].map((certificate, i) => (
                          <li key={i}>
                            <a
                              className="link"
                              target="_blank"
                              href={certificate.credLink}
                            >
                              {certificate.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </>
                ) : (
                  <div className="small-loader"></div>
                )}
              </section>
            </div>
            {/**
             * right section
             */}
            <div className="right">
              <section>
                <div className="main-title">Projects</div>
                {projects ? (
                  <>
                    {projects.map((project, i) => (
                      <Project
                        key={i}
                        title={project.title}
                        desc={project.desc}
                        stack={project.stack}
                        link={project.link}
                        gitLink={project.gitLink}
                        year={project.year}
                      />
                    ))}
                  </>
                ) : (
                  <div className="small-loader"></div>
                )}
              </section>
            </div>
          </main>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
