import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import "./App.css";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";

const App: React.FC = () => {
  const items = [
    { id: 1, label: "About Me", component: <AboutMe /> },
    { id: 2, label: "Projects", component: <Projects /> },
    { id: 3, label: "My Education", component: <Education /> },
    { id: 4, label: "Contact Me", component: <Contact /> },
  ];

  const [selectedComponent, setSelectedComponent] = useState<React.ReactNode>(
    items[0].component
  );

  return (
    <div className="app-container">
      <Sidebar items={items} onSelect={setSelectedComponent} />
      <main className="content">{selectedComponent}</main>
    </div>
  );
};

export default App;
