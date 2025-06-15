import React, { useState } from "react";
import "./Sidebar.css";

interface SidebarItem {
  id: number;
  label: string;
  component: React.ReactNode;
  icon?: React.ReactNode; // Nuevo: soporte para íconos
}

interface SidebarProps {
  items: SidebarItem[];
  onSelect: (component: React.ReactNode) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, onSelect }) => {
  const [selectedId, setSelectedId] = useState<number>(items[0].id);

  const handleClick = (id: number, component: React.ReactNode) => {
    setSelectedId(id);
    onSelect(component);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">
          My Portfolio <br /> Carlos Serradilla
        </h2>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          {items.map(({ id, label, component, icon }) => (
            <li
              key={id}
              className={`sidebar-item ${selectedId === id ? "active" : ""}`}
              onClick={() => handleClick(id, component)}
            >
              <span className="item-content">
                {icon && <span className="item-icon">{icon}</span>}
                {label}
              </span>
              <div className="active-indicator"></div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
