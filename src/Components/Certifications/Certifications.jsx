import React, { useState } from "react";
import "./Certifications.css";
import certificatesData from "../../assets/certificates";
import Certificate from "./Certificate";

function Certifications(props) {
  const [data, setData] = useState(certificatesData);
  const [activeType, setActiveType] = useState("all");
  const [loadAll, setLoadAll] = useState(false);

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
      </div>
      <div className="button loadButton" onClick={handleLoadAll}>
        {loadAll ? "Hide some Certificates" : "Show All Certificates"}
      </div>
    </div>
  );
}

export default Certifications;
