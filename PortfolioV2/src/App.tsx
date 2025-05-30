import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css"; // Para estilos generales

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="content">
        <h1>Contenido Principal</h1>
        <p>Este es el área de contenido, a la derecha de la barra lateral.</p>
      </main>
    </div>
  );
};

export default App;
