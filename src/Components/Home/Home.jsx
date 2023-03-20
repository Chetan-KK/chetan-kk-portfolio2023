import React, { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

import { motion } from "framer-motion";
import About from "../About/About";

function Home() {
  const [tiltYes, setTiltYes] = useState(true);

  useEffect(() => {
    window.innerWidth <= 600 ? setTiltYes(false) : setTiltYes(true);
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 700) {
        setTiltYes(false);
      } else {
        setTiltYes(true);
      }
    });
  }, []);

  return (
    <motion.div
      className="Home"
      initial={{
        opacity: 0,
        transition: { duration: 0.75, ease: "easeOut" },
      }}
      animate={{
        opacity: 1,
        transition: { duration: 0.75, ease: "easeOut" },
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.75, ease: "easeOut" },
      }}
    >
      <Navbar isNav={true} />
      <Hero isTilt={tiltYes} />
      <hr className="hr" />
      <Projects isTilt={tiltYes} />
      <Skills />
      <hr className="hr" />
      <About />
      <Contact isTilt={tiltYes} />
      <hr className="hr" />
      <Footer />
    </motion.div>
  );
}

export default Home;
