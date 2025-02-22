import projects from "../data/projects.json";
import Navbar from "@/components/Navbar";
import { Element, Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      {/* Hero Section */}
      <Element name="hero" className="hero">
        <h1 className="hero-title name-underline">Ankur K. Patel</h1>
        <p className="hero-subtitle">
          Building user-friendly and scalable applications.
        </p>

        {/* Social Icons */}
        <div className="hero-icons">
          <a
            href="https://github.com/apatel544"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ankurpatel-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:apatel9621@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        {/* CTA Button */}
        <Link to="projects" smooth={true} duration={500} className="hero-cta">
          View My Projects
        </Link>
      </Element>

      {/* About Me Section */}
      <Element name="about" className="section">
        <h2 className="section-title">About Me</h2>
        <p className="text-gray">
          I am a software engineer specializing in front-end development...
        </p>
      </Element>

      {/* Projects Section */}
      <Element name="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <p className="text-gray">Check out some of my work below.</p>
      </Element>
    </div>
  );
}
