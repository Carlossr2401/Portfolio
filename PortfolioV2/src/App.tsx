import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import AboutMe from "./components/AboutMe/AboutMe";
import "./App.css"; // Para estilos generales

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="content">
        <AboutMe />
      </main>
    </div>
  );
};

export default App;
