import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav style={{
      padding: '0.5rem 1rem',
      backgroundColor: 'black',
      borderBottom: '1px solid #ccc'
    }}>
      <ul style={{
  listStyle: 'none',
  display: 'flex',
  gap: '4rem',
  justifyContent: 'center',
  padding: 0,
  margin: 0
}}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/alumnos">Lista de Alumnos</Link></li>
        <li><Link to="/alumnos/nuevo">Nuevo Alumno</Link></li>
        <li><Link to="/acerca">Acerca De</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;