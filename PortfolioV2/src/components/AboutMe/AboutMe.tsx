import "./AboutMe.css";
import {
  FaGithub,
  FaGitAlt,
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiFlask, SiR } from "react-icons/si";

const AboutMe = () => {
  return (
    <section className="section-title">
      <h2 className="about-me-title">About Me</h2>
      <div className="about-me-content">
        <img
          src="https://avatars.githubusercontent.com/u/583231?v=4"
          alt="Foto de perfil"
          className="about-me-photo"
        />
        <div className="about-me-text">
          <p>
            ¡Hola! Soy un desarrollador apasionado por crear aplicaciones web
            modernas y eficientes. Me encanta aprender nuevas tecnologías y
            mejorar mis habilidades constantemente. Actualmente, trabajo con
            React, TypeScript y Node.js.
          </p>
          <div className="about-me-socials">
            <a
              href="https://github.com/Carlossr2401"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/tuusuario"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/tuusuario"
              target="_blank"
              rel="noreferrer"
            >
              CV
            </a>
          </div>
        </div>
      </div>

      <h2 className="about-me-title">Technologies</h2>
      <div className="technologies-grid">
        <div className="tech-category">
          <h3 className="category-title">Frontend</h3>
          <ul>
            <li>
              <FaHtml5 /> HTML
            </li>
            <li>
              <FaCss3Alt /> CSS
            </li>
            <li>
              <SiTailwindcss /> Tailwind
            </li>
            <li>
              <FaJsSquare /> JavaScript
            </li>
            <li>
              <FaReact /> React
            </li>
            <li>
              <FaAngular /> Angular
            </li>
          </ul>
        </div>
        <div className="tech-category">
          <h3 className="category-title">Backend</h3>
          <ul>
            <li>
              <FaJava /> Java
            </li>
            <li>
              <FaPython /> Python
            </li>
            <li>
              <SiFlask /> Flask
            </li>
          </ul>
        </div>
        <div className="tech-category">
          <h3 className="category-title">Data Analysis</h3>
          <ul>
            <li>
              <FaPython /> Python
            </li>
            <li>
              <SiR /> R
            </li>
          </ul>
        </div>
        <div className="tech-category">
          <h3 className="category-title">Tools</h3>
          <ul>
            <li>
              <FaGitAlt /> Git
            </li>
            <li>
              <FaGithub /> GitHub
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
