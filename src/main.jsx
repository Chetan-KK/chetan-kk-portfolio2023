import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

console.log(
  "%c This webiste is created by Chetan K",
  `
    font-size:1.2rem;
    padding:5px 20px;
    margin:2rem 0;
    background-color:black;
    border:2px solid white;
    box-shadow: 0 0 40px white;
    border-radius:5px;
`
);
console.log("👋🏼hyy!! what you donin here bud🤨? wanna talk😁 contact me!!!!!");
