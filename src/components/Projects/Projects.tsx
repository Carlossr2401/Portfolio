import React from "react";
import Card from "./Card/Card";
import "./Projects.css";

type Props = {};

function Projects({}: Props) {
  const proyectos = [
    {
      titulo: "Inventory Manager",
      descripcion:
        "Class project made from a group of six students where we created an inventory manager with connection to databases with Flask & SQLAlchemy",
      imagen: "src/assets/ProyectoDropHive.png",
      github: "https://github.com/JorgeCorreaMendez/DropHive",
      tecnologias: ["Flask", "HTML", "CSS", "Tailwind", "JavaScript", "SQLite"],
    },
    {
      titulo: "Movie Social Network",
      descripcion:
        "Class project made from a group where we learned how to use HTML, CSS, JS, Angular and FireStore. We decided to make a Social Network where we can manage a list of movies and a Tinder inspire discovery game.",
      imagen: "src/assets/ProyectoMovieMatch.png",
      github:
        "https://github.com/Carlos-Serradilla-Rguez/PWM_G43_4_Carlos_Gabriel_Dario",
      tecnologias: ["HTML", "CSS", "JavaScript", "Angular", "FireStore"],
    },
  ];
  return (
    <div className="section-title">
      <h2 className="about-me-title">My Projects</h2>
      <div className="tarjetas">
        {proyectos.map((proyecto, index) => (
          <Card key={index} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
