import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import anime from "animejs";

import "./App.css";

import Home from "./Components/Home/Home";
import MainProject from "./Components/MainProject/MainProject";
import MainLoading from "./Components/MainLoading/MainLoading";
import Resume from "./Components/Resume/Resume";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

import { ThemeProvider } from "./Context/ThemeContex";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isSmallScreen) {
      window.human = false;

      var canvasEl = document.querySelector(".fireworks");
      var ctx = canvasEl.getContext("2d");
      var numberOfParticules = 30;
      var pointerX = 0;
      var pointerY = 0;
      var tap =
        "ontouchstart" in window || navigator.msMaxTouchPoints
          ? "touchstart"
          : "mousedown";
      var colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"];

      function setCanvasSize() {
        canvasEl.width = window.innerWidth;
        canvasEl.height = window.innerHeight;
        canvasEl.style.width = window.innerWidth + "px";
        canvasEl.style.height = window.innerHeight + "px";
        canvasEl.getContext("2d");
      }

      function updateCoords(e) {
        pointerX = e.clientX || e.touches[0].clientX;
        pointerY = e.clientY || e.touches[0].clientY;
      }

      function setParticuleDirection(p) {
        var angle = (anime.random(0, 360) * Math.PI) / 180;
        var value = anime.random(50, 180);
        var radius = [-1, 1][anime.random(0, 1)] * value;
        return {
          x: p.x + radius * Math.cos(angle),
          y: p.y + radius * Math.sin(angle),
        };
      }

      function createParticule(x, y) {
        var p = {};
        p.x = x;
        p.y = y;
        p.color = colors[anime.random(0, colors.length - 1)];
        p.radius = anime.random(16, 32);
        p.endPos = setParticuleDirection(p);
        p.draw = function () {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
          ctx.fillStyle = p.color;
          ctx.fill();
        };
        return p;
      }

      function createCircle(x, y) {
        var p = {};
        p.x = x;
        p.y = y;
        p.color = "#FFF";
        p.radius = 0.1;
        p.alpha = 0.5;
        p.lineWidth = 6;
        p.draw = function () {
          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
          ctx.lineWidth = p.lineWidth;
          ctx.strokeStyle = p.color;
          ctx.stroke();
          ctx.globalAlpha = 1;
        };
        return p;
      }

      function renderParticule(anim) {
        for (var i = 0; i < anim.animatables.length; i++) {
          anim.animatables[i].target.draw();
        }
      }

      function animateParticules(x, y) {
        var circle = createCircle(x, y);
        var particules = [];
        for (var i = 0; i < numberOfParticules; i++) {
          particules.push(createParticule(x, y));
        }
        anime
          .timeline()
          .add({
            targets: particules,
            x: function (p) {
              return p.endPos.x;
            },
            y: function (p) {
              return p.endPos.y;
            },
            radius: 0.1,
            duration: anime.random(1200, 1800),
            easing: "easeOutExpo",
            update: renderParticule,
          })
          .add({
            targets: circle,
            radius: anime.random(80, 160),
            lineWidth: 0,
            alpha: {
              value: 0,
              easing: "linear",
              duration: anime.random(600, 800),
            },
            duration: anime.random(1200, 1800),
            easing: "easeOutExpo",
            update: renderParticule,
            offset: 0,
          });
      }

      var render = anime({
        duration: Infinity,
        update: function () {
          ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
        },
      });

      document.addEventListener(
        tap,
        function (e) {
          window.human = true;
          render.play();
          updateCoords(e);
          animateParticules(pointerX, pointerY);
        },
        false
      );

      var centerX = window.innerWidth / 2;
      var centerY = window.innerHeight / 2;

      setCanvasSize();
      window.addEventListener("resize", setCanvasSize, false);
    } else {
      var canvasEl = document.querySelector(".fireworks");
      canvasEl.style.display = "none";
    }
  }, [isSmallScreen]);

  return (
    <div className="App">
      <ThemeProvider>
        <MainLoading />
        <ScrollToTop />
        <div className="bgAnimation-wrapper">
          <canvas className="fireworks"></canvas>
        </div>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id/" element={<MainProject />} />
            <Route path="/resume/" element={<Resume />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
