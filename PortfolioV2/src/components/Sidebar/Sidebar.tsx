import React, { useState } from "react";
import "./Sidebar.css";

const items = [
  { id: 1, label: "Inicio" },
  { id: 2, label: "Acerca" },
  { id: 3, label: "Servicios" },
  { id: 4, label: "Contacto" },
];

const Sidebar: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(1);

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Mi Barra Lateral</h2>
      <ul className="sidebar-list">
        {items.map(({ id, label }) => (
          <li
            key={id}
            className={`sidebar-item ${selectedId === id ? "selected" : ""}`}
            onClick={() => setSelectedId(id)}
          >
            {label}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
