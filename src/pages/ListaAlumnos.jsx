import { Link } from 'react-router-dom';

function ListaAlumnos({ alumnos, setAlumnos }) {
  const handleEliminar = (id) => {
    const confirmar = confirm('¿Esta seguro que desea eliminar este alumno?');
    if (confirmar) {
      const nuevosAlumnos = alumnos.filter((alumno) => alumno.id !== id);
      setAlumnos(nuevosAlumnos);
    }
  };

  return (
  <div style={{ textAlign: 'center' }}>
    <h2>Lista de Alumnos</h2>
    {alumnos.length === 0 ? (
      <p>No hay alumnos cargados.</p>
    ) : (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>LU</th>
              <th>Nombre</th>
              <th>Curso</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno) => (
              <tr key={alumno.id}>
                <td>{alumno.id}</td>
                <td>{alumno.nombre} {alumno.apellido}</td>
                <td>{alumno.curso}</td>
                <td>
                  <Link to={`/alumnos/${alumno.id}`}>Ver</Link>{" | "}
                  <Link to={`/alumnos/${alumno.id}/editar`}>Editar</Link>{" | "}
                  <button onClick={() => handleEliminar(alumno.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);
}

export default ListaAlumnos;

