import React, { useState } from "react";

const Img = ({ src }) => {
  const [ImgLoaded, setImgLoaded] = useState(false);

  function handleImgLoad() {
    setImgLoaded(true);
  }

  return (
    <div>
      <div className={ImgLoaded ? "none" : "placeholder"}></div>
      <img src={src} onLoad={handleImgLoad} alt="" />
    </div>
  );
};

export default Img;
