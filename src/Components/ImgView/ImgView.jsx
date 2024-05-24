import React from "react";
import "./ImgView.css";

const ImgView = ({ imgSrc, closeImg }) => {
  return (
    <>
      <div className={`ImgView ${imgSrc ? "activeImgView" : ""} flex`}>
        <div
          className="button closeButton"
          onClick={() => {
            closeImg(null);
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <img src={imgSrc} alt="" />
      </div>
    </>
  );
};

export default ImgView;
