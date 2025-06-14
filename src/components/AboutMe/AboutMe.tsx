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
  FaDownload,
} from "react-icons/fa";
import { SiTailwindcss, SiFlask, SiR } from "react-icons/si";

const AboutMe = () => {
  return (
    <section className="section-title">
      <h2 className="about-me-title">About Me</h2>
      <div className="about-me-content">
        <img
          src="myAvatar.svg"
          alt="Foto de perfil"
          className="about-me-photo"
        />
        <div className="about-me-text">
          <p>
            I am a Computer Science student with international academic
            experience from my Erasmus at the University of Bologna. While I'm
            just starting my professional journey, I've worked on cross-border
            academic projects and mastered multiple programming languages
            through hands-on learning. I'm currently building my portfolio
            (including this site) while seeking curricular internship
            opportunities. A quick learner and problem-solver, I thrive when
            adapting to new technologies and collaborative environments.
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
              href="https://www.linkedin.com/in/carlos-serradilla-rodriguez-975066322/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="/docs/CurriculumVitaeCarlos.pdf" // Asegúrate de tener el archivo en public/docs/
              download="CarlosSR_FullStack_CV.pdf"
              className="cv-download-link"
            >
              <FaDownload className="icon" /> Download CV
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
