import { Link } from "react-scroll";
import icon from "/favicon.svg";
import { Link as NormalLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import "./Navbar.css";
import { useState } from "react";
import { ThemeContext } from "../../Context/ThemeContex";

export default function Navbar(props) {
  const { mode, toggleMode } = useContext(ThemeContext);

  const [menuToggle, setMenuToggle] = useState(false);

  function toggleNav() {
    if (menuToggle) {
      setMenuToggle(!menuToggle);
    } else {
      setMenuToggle(true);
    }
  }

  return (
    <div className={`Navbar flex`}>
      <div className="logo flex">
        <img src={icon} alt="" className="icon" title="👋🏼😃" />
        <NormalLink to="/" className="link" title="refresh">
          <b>{`<`}</b>Chetan Khulage<b>{`/>`}</b>
        </NormalLink>
      </div>
      <div onClick={toggleNav} className="menuToggle flex">
        <div className={menuToggle ? "hamburger hamburgerClose" : "hamburger"}>
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </div>
      </div>
      <div className={`right flex ${menuToggle ? "menuOpen" : "menuClose"}`}>
        {props.isNav && (
          <>
            <div className="links flex">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                className="link"
                title="go to home section"
              >
                Home
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="link"
                title="go to projects section"
              >
                Projects
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="link"
                title="go to skills section"
              >
                Skills
              </Link>

              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-180}
                duration={500}
                className="link"
                title="go to about section"
              >
                About
              </Link>
            </div>
            <div className="container flex">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                title="go to contact section"
              >
                <div className="button contact-button">Contact</div>
              </Link>
              <NormalLink to={"resume"} title="see resume">
                <div className="button contact-button">Resume</div>
              </NormalLink>
            </div>
          </>
        )}

        <div
          onClick={toggleMode}
          className="button flex"
          style={{
            justifyContent: "center",
            width: "40px",
            height: "40px",
          }}
          title={`Change theme to ${mode == "dark" ? "light" : "dark"}`}
        >
          {mode == "light" ? (
            <i className="fa-solid fa-moon"></i>
          ) : (
            <i className="fa-solid fa-sun"></i>
          )}
        </div>
      </div>
    </div>
  );
}
