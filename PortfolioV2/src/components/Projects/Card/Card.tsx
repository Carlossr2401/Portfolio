import React from "react";
import "./Cartd.css";

type Proyecto = {
  titulo: string;
  descripcion: string;
  imagen: string;
  github: string;
  tecnologias?: string[];
};

type Props = {
  proyecto: Proyecto;
};

function Card({ proyecto }: Props) {
  return (
    <div className="card">
      <img src={proyecto.imagen} alt={proyecto.titulo} />
      <div className="informacion-proyecto">
        <div className="nombre-proyecto">{proyecto.titulo}</div>
        <div className="descripcion-proyecto">{proyecto.descripcion}</div>

        {proyecto.tecnologias && (
          <div className="tecnologias-proyecto">
            {proyecto.tecnologias.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="link-proyecto">
          <a
            href={proyecto.github}
            target="_black"
            rel="noopener noreferrer"
            className="github-link"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
