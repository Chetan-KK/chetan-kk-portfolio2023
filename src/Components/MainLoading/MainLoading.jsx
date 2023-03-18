import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MainLoading.css";

function MainLoading() {
  const navigate = useNavigate();

  useEffect(() => {
    let startingMode = localStorage.getItem("mode");
    if (startingMode == "dark") {
      window.document.body.classList.add("dark");
      window.document.body.classList.remove("light");
    }
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }, []);

  return (
    <div className="MainLoading flex">
      <div className="loader flex">
        <div className="inner-loader"></div>
      </div>
      <div className="main-title">loading...</div>
      <div className="heading">Please wait</div>
    </div>
  );
}

export default MainLoading;
