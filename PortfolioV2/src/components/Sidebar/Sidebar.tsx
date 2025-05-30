import React from "react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Mi Barra Lateral</h2>
      <nav>
        <ul className="sidebar-list">
          <li>
            <a href="#home">ABOUT ME</a>
          </li>
          <li>
            <a href="#about">PROJECTS</a>
          </li>
          <li>
            <a href="#services">ACADEMIC COURSE</a>
          </li>
          <li>
            <a href="#contact">CONTACT ME</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
