import React from "react";
import { Link } from "react-router-dom";

function ListaTareas({ tareas }) {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <Link to={`/tarea/${index}`}>{tarea}</Link>
          </li>
        ))}
      </ul>
      <Link to="/crear">Crear nueva tarea</Link>
    </div>
  );
}

export default ListaTareas;