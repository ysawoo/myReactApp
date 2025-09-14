import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Mi App</h2>
      <ul style={styles.menu}>
        <li>
          <Link to="/" style={styles.link}>Inicio</Link>
        </li>
        <li>
          <Link to="/tareas" style={styles.link}>Lista de Tareas</Link>
        </li>
        <li>
          <Link to="/crear" style={styles.link}>Crear Tarea</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#282c34",
  },
  logo: {
    color: "white",
    margin: 0,
  },
  menu: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Navbar;