import projects from "../data/projects.json";
import Navbar from "@/components/Navbar";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div className="container">
      <Navbar />

      <Element name="hero" className="hero section">
        <h1 className="hero-title">Hero Section</h1>
        <p className="text-lg">Welcome to my portfolio</p>
      </Element>

      <Element name="about" className="about section">
        <h2 className="section-title">About Me</h2>
        <p className="text-gray">
          I am a software engineer specializing in front-end development...
        </p>
      </Element>

      <Element name="projects" className="projects section">
        <h2 className="section-title">Projects</h2>
        <p className="text-gray">Check out some of my work below.</p>
      </Element>
    </div>
  );
}
