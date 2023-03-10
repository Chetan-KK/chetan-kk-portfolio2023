import { Link } from "react-router-dom";
import icon from "/favicon.svg";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mode, setMode] = useState("light");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      window.document.body.classList.add("dark");
      window.document.body.classList.remove("light");
    } else {
      setMode("light");
      window.document.body.classList.add("light");
      window.document.body.classList.remove("dark");
    }
  }

  return (
    <div className={`Navbar flex ${scrolled ? "stick" : ""}`}>
      <div className="logo flex">
        <img src={icon} alt="" className="icon" />
        Chetan Khulage
      </div>
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
        <Link to="/">
          <div className="button contact-button">Contact</div>
        </Link>
        <div
          onClick={toggleMode}
          className="button flex"
          style={{ justifyContent: "center", width: "40px", height: "40px" }}
        >
          {mode == "light" ? (
            <i class="fa-solid fa-moon"></i>
          ) : (
            <i class="fa-solid fa-sun"></i>
          )}
        </div>
      </div>
    </div>
  );
}
