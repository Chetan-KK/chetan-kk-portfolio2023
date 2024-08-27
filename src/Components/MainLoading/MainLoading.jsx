import React, { useEffect, useState } from "react";

import "./MainLoading.css";

function MainLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div
        className={`MainLoading loadingBack flex`}
        style={{ transform: loading ? "" : "translateY(-100%)" }}
      ></div>
      <div
        className={`MainLoading flex`}
        style={{ transform: loading ? "" : "translateY(-100%)" }}
      >
        <div className="loader flex">
          <div className="inner-loader"></div>
        </div>
        <div className="main-title">loading...</div>
        <div className="heading">Please wait</div>
      </div>
    </>
  );
}

export default MainLoading;
