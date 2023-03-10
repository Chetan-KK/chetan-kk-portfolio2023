import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <hr />
      <Projects />
    </div>
  );
}

export default Home;
