import { Link } from 'react-router-dom';
import { useState } from 'react';


function ListaAlumnos({ alumnos, setAlumnos }) {
  const [mensajeExito, setMensajeExito] = useState("");
  const handleEliminar = (id) => {
    const confirmar = confirm('¿Esta seguro que desea eliminar este alumno?');
    if (confirmar) {
      const nuevosAlumnos = alumnos.filter((alumno) => alumno.id !== id);
      setAlumnos(nuevosAlumnos);
      setMensajeExito("✅ Alumno eliminado con éxito");
    setTimeout(() => setMensajeExito(""), 3000); // Se borra en 3 segundos
    }
  };

  return (
  <div style={{ textAlign: 'center' }}>
    <h2>Lista de Alumnos</h2>
    {mensajeExito && (
  <div style={{
    backgroundColor: "#d4edda",
    color: "#155724",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "15px",
    border: "1px solid #c3e6cb"
  }}>
    {mensajeExito}
  </div>
)}
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

