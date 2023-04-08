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
        <img src={icon} alt="" className="icon" />
        <NormalLink to="/" className="link">
          <b>{`<`}</b>Chetan Khulage<b>{`/>`}</b>
        </NormalLink>
      </div>
      <div onClick={toggleNav} className="menuToggle flex">
        {menuToggle ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
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
              >
                About
              </Link>
            </div>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <div className="button contact-button">Contact</div>
            </Link>
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
