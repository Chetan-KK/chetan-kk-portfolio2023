import { Link } from "react-scroll";
import { Link as NormalLink } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";

import "./Navbar.css";

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

  function sideClick() {
    setMenuToggle(false);
  }

  return (
    <div className={`Navbar flex`}>
      <div className="logo flex">
        <svg
          className="icon"
          width="61.133"
          height="36.572"
          viewBox="0 0 61.133 36.572"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="svgGroup"
            strokeLinecap="round"
            fillRule="evenodd"
            fontSize="9pt"
            strokeWidth="0"
          >
            <path d="M 37.958 28.353 A 15.713 15.713 0 0 0 39.404 26.392 Q 39.478 26.27 39.502 26.148 A 1.242 1.242 0 0 0 39.527 25.903 A 0.886 0.886 0 0 0 39.462 25.567 A 1.022 1.022 0 0 0 39.282 25.281 Q 39.038 25 38.623 25 Q 38.379 25 38.159 25.11 Q 37.94 25.22 37.818 25.44 A 14.422 14.422 0 0 1 36.54 27.17 A 19.661 19.661 0 0 1 34.986 28.784 A 20.35 20.35 0 0 1 34.032 29.618 A 23.134 23.134 0 0 1 30.896 31.775 A 22.094 22.094 0 0 1 30.46 32.02 A 23.915 23.915 0 0 1 25.879 33.923 A 19.412 19.412 0 0 1 20.239 34.741 A 26.276 26.276 0 0 1 15.821 34.363 Q 13.599 33.984 11.56 33.191 Q 9.522 32.398 7.752 31.177 Q 5.982 29.956 4.663 28.284 A 12.213 12.213 0 0 1 4.246 27.722 A 13.186 13.186 0 0 1 2.6 24.463 A 12.938 12.938 0 0 1 2.066 22.336 A 16.415 16.415 0 0 1 1.856 19.653 A 17.706 17.706 0 0 1 1.913 18.218 A 14.759 14.759 0 0 1 2.771 14.258 A 16.787 16.787 0 0 1 5.225 9.802 A 17.677 17.677 0 0 1 8.801 6.323 A 23.391 23.391 0 0 1 13.086 3.833 A 23.305 23.305 0 0 1 17.639 2.332 A 23.573 23.573 0 0 1 19.061 2.068 A 19.678 19.678 0 0 1 22.046 1.831 A 24.304 24.304 0 0 1 23.417 1.869 A 20.859 20.859 0 0 1 27.283 2.442 A 17.935 17.935 0 0 1 29.174 3.02 A 13.888 13.888 0 0 1 31.568 4.163 A 10.836 10.836 0 0 1 32.461 4.766 A 8.835 8.835 0 0 1 34.473 6.848 A 6.04 6.04 0 0 1 35.547 10.327 A 6.909 6.909 0 0 1 34.693 13.648 A 8.864 8.864 0 0 1 34.319 14.277 A 9.535 9.535 0 0 1 32.349 16.455 A 10.95 10.95 0 0 1 31.318 17.204 A 12.54 12.54 0 0 1 28.87 18.408 A 11.509 11.509 0 0 1 28.05 18.676 A 12.488 12.488 0 0 1 24.61 19.141 A 11.85 11.85 0 0 1 22.168 18.884 A 8.066 8.066 0 0 1 21.941 18.833 A 7.093 7.093 0 0 1 19.946 18.03 A 4.935 4.935 0 0 1 18.323 16.48 A 3.696 3.696 0 0 1 17.809 15.222 A 5.155 5.155 0 0 1 17.7 14.136 A 5.162 5.162 0 0 1 17.72 13.679 A 4.264 4.264 0 0 1 17.981 12.525 A 9.274 9.274 0 0 1 17.999 12.479 Q 18.132 12.138 18.278 11.843 A 5.654 5.654 0 0 1 18.604 11.267 Q 18.817 10.939 19.012 10.697 A 3.921 3.921 0 0 1 19.238 10.437 A 15.931 15.931 0 0 1 19.32 10.353 Q 19.491 10.178 19.553 10.127 A 0.169 0.169 0 0 1 19.58 10.108 A 0.98 0.98 0 0 0 19.809 9.799 A 0.995 0.995 0 0 0 19.898 9.375 A 1.095 1.095 0 0 0 19.896 9.324 A 0.808 0.808 0 0 0 19.629 8.74 A 0.912 0.912 0 0 0 19.32 8.553 A 1.034 1.034 0 0 0 18.97 8.496 A 1.223 1.223 0 0 0 18.875 8.5 A 1.428 1.428 0 0 0 18.665 8.533 Q 18.506 8.569 18.384 8.692 L 17.932 9.143 Q 17.529 9.546 17.078 10.254 Q 16.838 10.63 16.619 11.086 A 11.331 11.331 0 0 0 16.248 11.951 A 5.485 5.485 0 0 0 16.002 12.793 A 6.566 6.566 0 0 0 15.869 14.136 A 7.361 7.361 0 0 0 15.869 14.181 A 6.446 6.446 0 0 0 16.431 16.821 A 6.004 6.004 0 0 0 16.466 16.899 A 6.122 6.122 0 0 0 18.091 18.994 A 6.986 6.986 0 0 0 19.345 19.833 A 9.182 9.182 0 0 0 20.825 20.447 Q 22.461 20.972 24.585 20.972 A 16.141 16.141 0 0 0 24.832 20.97 A 14.254 14.254 0 0 0 29.553 20.117 A 15.383 15.383 0 0 0 30.338 19.806 A 13.194 13.194 0 0 0 33.631 17.798 Q 35.376 16.333 36.377 14.392 A 8.802 8.802 0 0 0 37.378 10.303 A 7.661 7.661 0 0 0 36.17 6.091 A 10.048 10.048 0 0 0 35.141 4.748 A 11.543 11.543 0 0 0 32.886 2.844 A 14.869 14.869 0 0 0 30.918 1.767 A 18.528 18.528 0 0 0 28.04 0.745 A 20.788 20.788 0 0 0 26.271 0.352 A 23.766 23.766 0 0 0 22.119 0 A 23.771 23.771 0 0 0 16.529 0.659 A 24.344 24.344 0 0 0 11.328 2.551 A 22.712 22.712 0 0 0 6.787 5.542 A 20.309 20.309 0 0 0 3.198 9.485 Q 1.685 11.67 0.842 14.234 A 16.346 16.346 0 0 0 0.716 14.636 A 17.358 17.358 0 0 0 0 19.653 A 18.991 18.991 0 0 0 0.115 21.775 A 15.075 15.075 0 0 0 0.818 24.976 A 16.721 16.721 0 0 0 0.95 25.346 A 14.75 14.75 0 0 0 3.076 29.248 Q 4.517 31.128 6.458 32.507 Q 8.399 33.887 10.657 34.79 A 24.084 24.084 0 0 0 15.369 36.133 A 27.851 27.851 0 0 0 20.288 36.572 A 21.019 21.019 0 0 0 26.392 35.681 A 28.158 28.158 0 0 0 26.942 35.509 A 25.24 25.24 0 0 0 31.848 33.338 Q 34.351 31.885 36.304 30.066 A 21.332 21.332 0 0 0 37.958 28.353 Z M 48.071 32.446 Q 48.487 33.374 49.439 33.923 A 4.137 4.137 0 0 0 51.274 34.463 A 5.01 5.01 0 0 0 51.587 34.473 A 3.783 3.783 0 0 0 51.799 34.466 Q 52.042 34.452 52.403 34.41 A 23.468 23.468 0 0 0 52.783 34.363 A 3.695 3.695 0 0 0 53.442 34.208 Q 53.768 34.102 54.125 33.933 A 8.428 8.428 0 0 0 54.7 33.63 Q 55.528 33.156 56.434 32.264 A 15.102 15.102 0 0 0 57.007 31.665 A 10.515 10.515 0 0 0 57.912 30.504 Q 58.332 29.887 58.742 29.134 A 23.492 23.492 0 0 0 59.375 27.881 A 1.011 1.011 0 0 1 59.511 27.659 A 0.809 0.809 0 0 1 59.717 27.478 A 0.918 0.918 0 0 1 60.205 27.344 A 0.953 0.953 0 0 1 60.533 27.398 A 0.828 0.828 0 0 1 60.877 27.637 A 1.107 1.107 0 0 1 61.05 27.898 A 0.876 0.876 0 0 1 61.133 28.272 A 0.599 0.599 0 0 1 61.123 28.373 Q 61.105 28.477 61.053 28.616 A 2.368 2.368 0 0 1 61.035 28.662 A 20.415 20.415 0 0 1 59.891 30.742 A 17.067 17.067 0 0 1 59.131 31.848 A 14.108 14.108 0 0 1 57.68 33.512 A 12.011 12.011 0 0 1 56.861 34.241 A 10.169 10.169 0 0 1 55.13 35.381 A 8.908 8.908 0 0 1 54.309 35.755 Q 52.979 36.279 51.587 36.279 Q 50.488 36.279 49.524 35.938 A 5.903 5.903 0 0 1 48.486 35.457 A 4.896 4.896 0 0 1 47.864 35.022 A 4.767 4.767 0 0 1 47.046 34.164 A 4.227 4.227 0 0 1 46.765 33.728 A 3.168 3.168 0 0 1 46.424 32.837 A 2.818 2.818 0 0 1 46.363 32.251 A 1.088 1.088 0 0 1 46.365 32.183 Q 46.369 32.112 46.382 32.015 A 4.046 4.046 0 0 1 46.387 31.983 Q 46.407 31.842 46.485 31.676 A 1.741 1.741 0 0 1 46.521 31.604 Q 46.631 31.397 46.839 31.214 A 1.233 1.233 0 0 1 47.042 31.07 Q 47.146 31.01 47.273 30.959 A 2.49 2.49 0 0 1 47.412 30.908 A 11.241 11.241 0 0 0 48.714 30.442 A 9.708 9.708 0 0 0 49.256 30.188 Q 50.098 29.761 50.708 29.224 A 4.451 4.451 0 0 0 51.366 28.509 A 3.825 3.825 0 0 0 51.66 28.04 Q 52.002 27.393 52.002 26.636 A 1.613 1.613 0 0 0 51.924 26.123 A 1.35 1.35 0 0 0 51.563 25.562 A 1.504 1.504 0 0 0 50.498 25.147 A 1.945 1.945 0 0 0 50.488 25.147 Q 49.829 25.147 49.195 25.598 A 5.434 5.434 0 0 0 48.53 26.161 A 7.403 7.403 0 0 0 47.962 26.795 A 11.237 11.237 0 0 0 47.247 27.797 A 13.978 13.978 0 0 0 46.826 28.504 A 22.024 22.024 0 0 0 45.838 30.518 A 25.36 25.36 0 0 0 45.044 32.605 A 31.533 31.533 0 0 0 44.733 33.603 A 23.82 23.82 0 0 0 44.483 34.522 A 165.386 165.386 0 0 0 44.406 34.802 A 211.803 211.803 0 0 0 44.324 35.108 A 2.289 2.289 0 0 1 44.068 35.706 A 1.679 1.679 0 0 1 43.77 36.072 A 1.533 1.533 0 0 1 43.653 36.17 A 0.876 0.876 0 0 1 43.332 36.318 Q 43.207 36.348 43.06 36.352 A 1.616 1.616 0 0 1 43.018 36.353 Q 42.652 36.353 42.31 36.047 A 0.886 0.886 0 0 1 42.082 35.714 Q 41.968 35.433 41.968 35.01 A 12.239 12.239 0 0 1 41.968 34.926 Q 41.97 34.68 41.98 33.887 A 502.122 502.122 0 0 1 41.987 33.361 Q 41.998 32.517 42.017 31.336 Q 42.038 29.982 42.068 28.286 A 2050.149 2050.149 0 0 1 42.078 27.722 A 547.383 547.383 0 0 0 42.111 25.623 A 648.432 648.432 0 0 0 42.139 23.401 A 492.196 492.196 0 0 1 42.206 19.003 A 534.426 534.426 0 0 1 42.212 18.701 Q 42.261 16.284 42.285 13.989 A 664.826 664.826 0 0 1 42.313 11.752 A 566.769 566.769 0 0 1 42.346 9.631 A 1841.56 1841.56 0 0 0 42.376 7.915 Q 42.394 6.869 42.407 5.969 A 1363 1363 0 0 0 42.419 5.206 Q 42.433 4.27 42.441 3.577 A 434.841 434.841 0 0 0 42.444 3.357 A 687.706 687.706 0 0 0 42.448 3.006 Q 42.456 2.307 42.456 2.149 A 0.849 0.849 0 0 1 42.539 1.771 A 0.857 0.857 0 0 1 42.749 1.502 A 1.107 1.107 0 0 1 43.01 1.329 A 0.876 0.876 0 0 1 43.384 1.245 A 0.983 0.983 0 0 1 43.749 1.311 A 0.907 0.907 0 0 1 44.043 1.502 A 0.855 0.855 0 0 1 44.305 2.047 A 1.177 1.177 0 0 1 44.312 2.173 A 3.408 3.408 0 0 1 44.312 2.199 Q 44.31 2.336 44.3 3.137 Q 44.287 4.053 44.263 5.591 Q 44.246 6.648 44.224 7.948 A 2446.55 2446.55 0 0 1 44.202 9.18 A 2015.647 2015.647 0 0 0 44.165 11.295 A 2404.714 2404.714 0 0 0 44.129 13.538 A 5430.106 5430.106 0 0 0 44.058 18.134 A 5902.219 5902.219 0 0 0 44.055 18.286 A 6035.423 6035.423 0 0 1 43.982 23.047 A 1146.154 1146.154 0 0 0 43.949 25.311 A 987.187 987.187 0 0 0 43.921 27.466 A 1327.07 1327.07 0 0 1 43.9 29.21 Q 43.886 30.271 43.872 31.177 A 22.999 22.999 0 0 1 44.43 29.61 A 28.57 28.57 0 0 1 44.873 28.552 Q 45.484 27.173 46.314 26.001 A 8.839 8.839 0 0 1 47.432 24.698 A 7.511 7.511 0 0 1 48.181 24.072 A 3.824 3.824 0 0 1 50.488 23.316 A 3.443 3.443 0 0 1 51.535 23.472 A 3.194 3.194 0 0 1 51.807 23.572 A 3.282 3.282 0 0 1 52.869 24.28 A 3.282 3.282 0 0 1 53.577 25.342 A 3.333 3.333 0 0 1 53.831 26.528 A 3.837 3.837 0 0 1 53.833 26.66 A 4.288 4.288 0 0 1 53.535 28.265 A 4.097 4.097 0 0 1 53.345 28.674 Q 52.857 29.59 52.051 30.31 A 8.694 8.694 0 0 1 50.526 31.395 A 9.9 9.9 0 0 1 50.208 31.568 Q 49.17 32.105 48.071 32.446 Z" />
          </g>
        </svg>
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
      <div
        className={menuToggle ? "overlay" : "overlay overlayClose"}
        onClick={sideClick}
      ></div>
      <div className={`right flex ${menuToggle ? "menuOpen" : "menuClose"}`}>
        {props.isNav && (
          <>
            <div className="links flex">
              <Link
                to="hero"
                spy={true}
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
