import React from "react";
import "./Navbar.scss";

const DesktopNavbar = () => {
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
      <div className="buttons">
        <button className="pricing-btn">Pricing</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </div>
  );
};

export default DesktopNavbar;
