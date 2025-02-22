import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="hero" smooth={true} duration={500} className="nav-link">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="nav-link">
          About Me
        </Link>
        <Link to="projects" smooth={true} duration={500} className="nav-link">
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
