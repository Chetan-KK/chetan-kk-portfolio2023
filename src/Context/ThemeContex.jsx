import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [mode, setMode] = useState("light");
  useEffect(() => {
    let startingMode = localStorage.getItem("mode");
    if (startingMode == "dark") {
      setMode("dark");
      toggleMode();
      toggleMetaTheme();
    }
  }, []);

  const metaTag = document.querySelector("meta[name='theme-color']");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      window.document.body.classList.add("dark");
      window.document.body.classList.remove("light");
      metaTag.setAttribute("content", "#212428");
      localStorage.setItem("mode", "dark");
    } else {
      setMode("light");
      window.document.body.classList.add("light");
      window.document.body.classList.remove("dark");
      metaTag.setAttribute("content", "#ecf0f3");
      localStorage.setItem("mode", "light");
    }
  };

  const toggleMetaTheme = () => {};

  return (
    <div>
      <ThemeContext.Provider value={{ mode, toggleMode }}>
        {props.children}
      </ThemeContext.Provider>
    </div>
  );
}

export { ThemeContext, ThemeProvider };
