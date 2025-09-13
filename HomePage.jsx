import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>¡Bienvenido a tu App de Tareas!</h1>
      <p>Para ver tus tareas, haz clic en el enlace:</p>
      <Link to="/tareas">Ir a la Lista de Tareas</Link>
    </div>
  );
}

export default HomePage;