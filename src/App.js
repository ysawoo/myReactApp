


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TareasPage from "./TareasPage";
import DetalleTarea from "./DetalleTarea";

function App() {

  return (
    <Router>
      <div>
        <h1>Mi Aplicación de Tareas</h1>
        <Routes>
          <Route path="/" element={<TareasPage />} />
          <Route path="/tarea/:id" element={<DetalleTarea />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






























