import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import "./Navbar.scss";

const Navbar = () => {
  const { width } = useWindowDimensions();

  console.log(width);

  return width > 800 ? <DesktopNavbar /> : <MobileNavbar />;
};

export default Navbar;
