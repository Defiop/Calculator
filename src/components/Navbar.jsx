import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];
  return (
    <nav>
      <div>
        <div>
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3 "
          >
            <img alt="" src={logo}></img>
            <span>XYZ</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
