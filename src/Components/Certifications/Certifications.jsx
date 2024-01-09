import React, { useEffect, useState } from "react";

import "./Certifications.css";

import Certificate from "./Certificate";
import fetchCertificates from "../../Utils/GetCertificates";

function Certifications(props) {
  const [certificatesData, setCertificatesData] = useState();
  const [activeType, setActiveType] = useState("all");
  const [loadAll, setLoadAll] = useState(false);

  const getProjects = async () => {
    setCertificatesData(await fetchCertificates());
  };

  useEffect(() => {
    getProjects();
  }, []);

  const handleCertificates = (e) => {
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

  const handleLoadAll = () => {
    setLoadAll((prev) => {
      return !prev;
    });
  };

  return (
    <div className="Certifications">
      <div className="main-title">
        {/* <img src={boyIcon} alt="" className="imgIcon boyIcon" /> */}
        Certifications
      </div>
      <div className="heading">
        <b>here are some of my Certificates</b>
      </div>
      <div className="buttons flex">
        <div className="button" onClick={handleCertificates}>
          All
        </div>
        <div className="button" onClick={handleCertificates}>
          Udemy
        </div>
        <div className="button" onClick={handleCertificates}>
          Great Learning
        </div>
        <div className="button" onClick={handleCertificates}>
          Other Certificates
        </div>
      </div>
      <div
        className={
          loadAll
            ? "all-certificates flex"
            : "all-certificates all-certificates-open flex"
        }
      >
        {certificatesData ? (
          <>
            {activeType == "all"
              ? Object.keys(certificatesData).map((key, i) => (
                  <div key={i} className="container flex">
                    {certificatesData[key].map((certificate, i) => (
                      <Certificate
                        key={i}
                        isTilt={props.isTilt}
                        name={certificate.name}
                        credLink={certificate.credLink}
                        imgSrc={certificate.imgSrc}
                      />
                    ))}
                  </div>
                ))
              : undefined}
            {activeType == "udemy"
              ? certificatesData[activeType].map((certificate, i) => (
                  <Certificate
                    key={i}
                    isTilt={props.isTilt}
                    name={certificate.name}
                    credLink={certificate.credLink}
                    imgSrc={certificate.imgSrc}
                  />
                ))
              : undefined}
            {activeType == "greatLearning"
              ? certificatesData[activeType].map((certificate, i) => (
                  <Certificate
                    key={i}
                    isTilt={props.isTilt}
                    name={certificate.name}
                    credLink={certificate.credLink}
                    imgSrc={certificate.imgSrc}
                  />
                ))
              : undefined}
            {activeType == "others"
              ? certificatesData[activeType].map((certificate, i) => (
                  <Certificate
                    key={i}
                    isTilt={props.isTilt}
                    name={certificate.name}
                    credLink={certificate.credLink}
                    imgSrc={certificate.imgSrc}
                  />
                ))
              : undefined}
          </>
        ) : (
          <div className="small-loader"></div>
        )}
      </div>
      <div className="button loadButton" onClick={handleLoadAll}>
        {loadAll ? "Show less" : "Show more"}
      </div>
      <h1 className="heading">
        <b>THREE JS JOURNEY CERTIFICATE</b>
      </h1>
      <div className="threeJsCertificate flex">
        <Certificate
          isTilt={props.isTilt}
          name={"THREE JS Journey by Bruno Simon"}
          credLink={"https://threejs-journey.com/certificate/view/20439"}
          imgSrc={`https://raw.githubusercontent.com/chetan-kk/chetan-kk/main/certificates/three-js-journey.webp`}
        />
      </div>
    </div>
  );
}

export default Certifications;
