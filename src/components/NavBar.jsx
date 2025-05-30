import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/alumnos">Lista de Alumnos</Link></li>
        <li><Link to="/alumnos/nuevo">Nuevo Alumno</Link></li>
        <li><Link to="/acerca">Acerca De</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
