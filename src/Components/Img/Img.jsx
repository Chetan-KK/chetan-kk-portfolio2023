import React, { useState } from "react";

const Img = ({ src, className, title, alt }) => {
  const [ImgLoaded, setImgLoaded] = useState(false);

  function handleImgLoad() {
    setImgLoaded(true);
  }

  return (
    <div>
      <div className={ImgLoaded ? "none" : "placeholder"}></div>
      <img
        src={src}
        onLoad={handleImgLoad}
        className={className}
        title={title}
        alt={alt}
      />
    </div>
  );
};

export default Img;
