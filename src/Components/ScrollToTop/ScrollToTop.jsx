import React, { useState } from "react";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  return (
    <div>
      <a href="#top" className="button upButton" title="Scroll to top">
        <i className="fa-solid fa-caret-up"></i>
      </a>
    </div>
  );
}

export default ScrollToTop;
