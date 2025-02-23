import projects from "../data/projects.json";
import Navbar from "@/components/Navbar";
import { Element, Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import profilePic from "../../public/images/about-me.png"; // Ensure you have a profile image in the public folder
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
      <Element name="about" className="about-me">
        <h2 className="about-me-title">About Me</h2>
        <Image
          src={profilePic}
          alt="Photo of Ankur"
          className="about-me-image"
        />
        <p className="about-me-content">
          I’m passionate about building clean, responsive, and user-friendly web
          applications. With over five years of experience in front-end
          development, I’ve worked with React.js, JavaScript, and other modern
          technologies to create scalable solutions that enhance user
          experiences. Lately, I’ve been diving into Next.js and Tailwind CSS to
          craft even faster and more dynamic applications. I love solving
          complex problems and turning ideas into seamless, engaging digital
          experiences.
        </p>
        {/* CTA Button
        <Link smooth={true} duration={500} className="about-cta">
          View My Projects
        </Link> */}
      </Element>

      {/* Projects Section */}
      <Element name="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <p className="text-gray">Check out some of my work below.</p>
      </Element>
    </div>
  );
}
