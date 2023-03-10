import React, { useState } from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import { useEffect } from "react";

function Home() {
  const [mode, setMode] = useState("light");
  useEffect(() => {
    let startingMode = localStorage.getItem("mode");
    if (startingMode == "dark") {
      setMode("dark");
      toggleMode();
    }
  }, []);

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      window.document.body.classList.add("dark");
      window.document.body.classList.remove("light");
      localStorage.setItem("mode", "dark");
    } else {
      setMode("light");
      window.document.body.classList.add("light");
      window.document.body.classList.remove("dark");
      localStorage.setItem("mode", "light");
    }
  }

  return (
    <div className="Home">
      <Navbar modeEvent={toggleMode} mode={mode} />
      <Hero mode={mode} />
      <hr className="hr" />
      <Projects />
      <Skills />
    </div>
  );
}

export default Home;
