import { useParams } from 'react-router-dom';

function DetalleAlumno({ alumnos }) {
  const { id } = useParams(); // obtenemos la id desde la url
  const alumno = alumnos.find(a => a.id === id); // bucar alumno con el id

  if (!alumno) {
    return <h2>Alumno no encontrado</h2>;
  }

  return (
    <div>
      <h2>Detalle del Alumno</h2>
      <p><strong>LU:</strong> {alumno.id}</p>
      <p><strong>Nombre:</strong> {alumno.nombre} {alumno.apellido}</p>
      <p><strong>Curso:</strong> {alumno.curso}</p>
      <p><strong>Email:</strong> {alumno.email}</p>
      <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
      <p><strong>Teléfono:</strong> {alumno.telefono}</p>
    </div>
  );
}

export default DetalleAlumno;

