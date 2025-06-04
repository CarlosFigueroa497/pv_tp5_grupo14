import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav style={{
      padding: '0.5rem 1rem',
      backgroundColor: 'black',
      borderBottom: '1px solid #ccc'
    }}>
      <ul>
        <li><NavLink to="/" className="nav-link" end>Inicio</NavLink></li>
        <li><NavLink to="/alumnos" className="nav-link" end>Lista de Alumnos</NavLink></li>
        <li><NavLink to="/alumnos/nuevo" className="nav-link">Nuevo Alumno</NavLink></li>
        <li><NavLink to="/acerca" className="nav-link" end>Acerca De</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
