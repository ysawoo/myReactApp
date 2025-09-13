import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TareasPage() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTareas([
        "Hacer la cama",
        "Lavar los platos",
        "Estudiar React",
        "Salir a correr",
      ]);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
    </div>
  );
}


export default TareasPage;
