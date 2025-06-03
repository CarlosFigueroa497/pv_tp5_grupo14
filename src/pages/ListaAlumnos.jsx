import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


function ListaAlumnos({ alumnos, setAlumnos }) {
  const location = useLocation();
  const [mensajeExito, setMensajeExito] = useState("");

    // Mostrar mensaje que llega desde la navegación (por agregar alumno)
  useEffect(() => {
    if (location.state?.mensajeExito) {
      setMensajeExito(location.state.mensajeExito);
      // Limpiar el mensaje luego de 3 segundos
      const timer = setTimeout(() => setMensajeExito(""), 3000);

      // Limpia el estado para que no vuelva a mostrar el mensaje al re-renderizar
      window.history.replaceState({}, document.title);

      return () => clearTimeout(timer);
    }
  }, [location.state]);
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

