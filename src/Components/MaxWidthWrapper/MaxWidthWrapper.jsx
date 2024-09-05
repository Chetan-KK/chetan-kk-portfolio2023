import React from "react";
import "./MaxWidthWrapper.css";

// used in hero only
const MaxWidthWrapper = ({ children, className, ...props }) => {
  return (
    <div className={`${className} MaxWidthWrapper`} {...props}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
