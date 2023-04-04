import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [mode, setMode] = useState("light");
  useEffect(() => {
    let startingMode = localStorage.getItem("mode");
    if (startingMode == "dark") {
      setMode("dark");
      toggleMode();
    }
  }, []);

  const toggleMode = () => {
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
  };

  return (
    <div>
      <ThemeContext.Provider value={{ mode, toggleMode }}>
        {props.children}
      </ThemeContext.Provider>
    </div>
  );
}

export { ThemeContext, ThemeProvider };
