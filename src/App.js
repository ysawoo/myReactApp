
//punto 1

//import React, { useState } from "react";//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Tareas/HomePage";
import Navbar from "./components/Tareas/Navbar";
import ListaTareas from "./components/Tareas/ListaTareas";
import DetalleTarea from "./components/Tareas/DetalleTarea";
import CrearTarea from "./components/Tareas/CrearTareaPage";

//function App() {/*
//const [tareas, setTareas] = useState([
//  "Hacer la cama",
//  "Lavar los platos",
//  "Estudiar React",
//  "Salir a correr",
//]);

//return (
// <Router>
//  <Navbar />
//  <div style={{ padding: "20px" }}>
//   <Routes>
//    <Route path="/" element={<HomePage />} />
//     <Route path="/tareas" element={<ListaTareas tareas={tareas} />} />
//     <Route path="/tarea/:id" element={<DetalleTarea tareas={tareas} />} />
//      <Route
//        path="/crear"
//       element={<CrearTarea tareas={tareas} setTareas={setTareas} />}
//     />
//     </Routes>
//   </div>
//  </Router>
//);


//export default App;

//punto 2
//import React, { useState } from "react";
//import CrearTareaPage from "./components/CrearTareaPage";
//function App() {
//const [tareas, setTareas] = useState([]);

// Función que pasamos al componente hijo
//const agregarTarea = (tareaNueva) => {
// setTareas([...tareas, tareaNueva]);
//};

//return (
// <div>
// <h1>Mi Lista de Tareas</h1>

//<CrearTareaPage agregarTarea={agregarTarea} />

//<ul>
//{tareas.map((t, i) => (
//  <li key={i}>{t}</li>
//))}
//</ul>
//</div>
// );
//} export default App;

//punto 3:

import React, { useState } from "react";

function App() {
  const [tareas, setTareas] = useState([
    "Hacer la cama",
    "Lavar los platos",
    "Estudiar React",
  ]);

  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Tareas</h1>

      {/* Lista de tareas */}
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <button
              onClick={() => setTareaSeleccionada(index)}
              style={{ cursor: "pointer" }}
            >
              {tarea}
            </button>
          </li>
        ))}
      </ul>

      {/* Mostrar detalles si hay tarea seleccionada */}
      {tareaSeleccionada !== null && (
        <div style={{ marginTop: "20px" }}>
          <h2>Detalles de la tarea {tareaSeleccionada}</h2>
          <p>{tareas[tareaSeleccionada]}</p>
          <button onClick={() => setTareaSeleccionada(null)}>
            Volver a la lista
          </button>
        </div>
      )}
    </div>
  );
} export default App;



























