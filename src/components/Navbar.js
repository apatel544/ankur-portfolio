import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md p-4 z-50">
      <div className="max-w-4xl mx-auto flex justify-center space-x-6">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-gray-300"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-gray-300"
        >
          About Me
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-gray-300"
        >
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
