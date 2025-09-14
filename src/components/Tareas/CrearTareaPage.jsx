import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CrearTarea({ tareas, setTareas }) {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const navigate = useNavigate();

  const handleAgregar = () => {
    if (nuevaTarea.trim() === "") return;
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea("");
    navigate("/tareas"); // vuelve a la lista de tareas
  };

  return (
    <div>
      <h2>Crear Nueva Tarea</h2>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Escribe tu tarea..."
      />
      <button onClick={handleAgregar}>Agregar</button>
    </div>
  );
}

export default CrearTarea;