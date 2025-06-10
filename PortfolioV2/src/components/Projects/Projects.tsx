import React from "react";
import Card from "./Card/Card";

type Props = {};

function Projects({}: Props) {
  const proyectos = [
    {
      titulo: "Inventory Manager",
      descripcion:
        "Class project made from a group of six students where we created an inventory manager with connection to databases with Flask & SQLAlchemy",
      imagen: "",
      github: "https://google.com",
      tecnologias: ["Flask", "HTML", "CSS", "JavaScript", "SQLite"],
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
