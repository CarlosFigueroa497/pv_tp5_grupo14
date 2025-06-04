import { useParams, useNavigate } from 'react-router-dom';



function DetalleAlumno({ alumnos }) {
  const { id } = useParams(); // obtenemos la id desde la url
  const navigate = useNavigate();
  const alumno = alumnos.find(a => a.id === id); // bucar alumno con el id

  if (!alumno) {
    return <h2>Alumno no encontrado</h2>;
  }

return (
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
    <div style={{
      width: '400px',
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      color: '#333',
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Detalles del Alumno</h2>
      <p><strong>LU:</strong> {alumno.id}</p>
      <p><strong>Nombre:</strong> {alumno.nombre} {alumno.apellido}</p>
      <p><strong>Curso:</strong> {alumno.curso}</p>
      <p><strong>Email:</strong> {alumno.email}</p>
      <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
      <p><strong>Teléfono:</strong> {alumno.telefono}</p>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={() => navigate(-1)} style={{ padding: '8px 12px' }}>
      Volver
      </button>
</div>

    </div>
  </div>
);

}

export default DetalleAlumno;

