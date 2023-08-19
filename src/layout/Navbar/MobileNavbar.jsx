import React, { useState } from "react";
import "./Navbar.scss";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="title">
        <span className="center-dots">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
        </span>
        <h1>OneCourse</h1>
      </div>
      <div onClick={() => setIsOpen((prev) => !prev)} className="hamburger">
        <span
          className={`bar ${
            !isOpen ? "translate-y-[-0.75rem]" : "rotate-[-45deg]"
          }`}
        ></span>
        <span className={`bar  ${!isOpen ? "" : "opacity-0"}`}></span>
        <span
          className={`bar ${
            !isOpen ? "translate-y-3" : "translate-y-[-4px] rotate-[45deg]"
          }`}
        ></span>
      </div>

      {isOpen && (
        <div className="menu">
          <div className="buttons">
            <button className="pricing-btn">Pricing</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
