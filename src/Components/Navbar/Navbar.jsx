import { Link } from "react-router-dom";
import icon from "/favicon.svg";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar(props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  function toggleNav() {
    if (menuToggle) {
      setMenuToggle(!menuToggle);
    } else {
      setMenuToggle(true);
    }
  }

  return (
    <div className={`Navbar flex ${scrolled ? "stick" : ""}`}>
      <div className="logo flex">
        <img src={icon} alt="" className="icon" />
        Chetan Khulage
      </div>
      <div onClick={toggleNav} className="menuToggle flex">
        {menuToggle ? (
          <i class="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>
      <div className={`right flex ${menuToggle ? "menuOpen" : "menuClose"}`}>
        <div className="links flex">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/" className="link">
            Skills
          </Link>
          <Link to="/" className="link">
            Projects
          </Link>
          <Link to="/" className="link">
            About
          </Link>
        </div>
        <div className="buttons flex">
          <Link to="/">
            <div className="button contact-button">Contact</div>
          </Link>
          <div
            onClick={props.modeEvent}
            className="button flex"
            style={{
              justifyContent: "center",
              width: "40px",
              height: "40px",
            }}
          >
            {props.mode == "light" ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-solid fa-sun"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
