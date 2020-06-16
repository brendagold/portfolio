import React, { useState, useEffect } from "react";

const ScrollToTop = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      toggleVisibility();
    });
  });

  function toggleVisibility() {
    if (window.pageYOffset > 500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="scroll-to-top">
      {visible && (
        <div onClick={() => scrollUp()}>
          <button id="myBtn" title="Go to top">
            <i className="fa fa-arrow-up "></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
