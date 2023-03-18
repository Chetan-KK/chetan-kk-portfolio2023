import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

import { motion } from "framer-motion";
import About from "../About/About";

function Home() {
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
      <Hero />
      <hr className="hr" />
      <Projects />
      <Skills />
      <hr className="hr" />
      <About />
      <Contact />
      <hr className="hr" />
      <Footer />
    </motion.div>
  );
}

export default Home;
