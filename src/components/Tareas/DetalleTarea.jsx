import React from "react";
import { useParams } from "react-router-dom";

function DetalleTarea() {
  const { id } = useParams(); // Captura el parámetro de la URL
  const tareasPredefinidas = [
    "Hacer la cama",
    "Lavar los platos",
    "Estudiar React",
    "Salir a correr",
  ];

  const tarea = tareasPredefinidas[id];

  return (
    <div>
      <h2>Detalle de la Tarea</h2>
      <p>{tarea ? tarea : "Tarea no encontrada"}</p>
    </div>
  );
}

export default DetalleTarea;