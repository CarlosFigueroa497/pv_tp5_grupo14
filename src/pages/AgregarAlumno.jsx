import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AgregarAlumno({ setAlumnos }) {
  const [nuevoAlumno, setNuevoAlumno] = useState({
    id: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNuevoAlumno({
      ...nuevoAlumno,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validacion
    if (!nuevoAlumno.id || !nuevoAlumno.nombre || !nuevoAlumno.apellido) {
      alert('Por favor, completá al menos LU, nombre y apellido.');
      return;
    }

    // agregar alumnos
    setAlumnos((prevAlumnos) => [...prevAlumnos, nuevoAlumno]);

    // redirigir a la lista
    navigate('/alumnos');
  };

  return (
    <div>
      <h2>Agregar Nuevo Alumno</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>LU: <input name="id" value={nuevoAlumno.id} onChange={handleChange} /></label>
        </div>
        <div>
          <label>Nombre: <input name="nombre" value={nuevoAlumno.nombre} onChange={handleChange} /></label>
        </div>
        <div>
          <label>Apellido: <input name="apellido" value={nuevoAlumno.apellido} onChange={handleChange} /></label>
        </div>
        <div>
          <label>Curso: <input name="curso" value={nuevoAlumno.curso} onChange={handleChange} /></label>
        </div>
        <div>
          <label>Email: <input name="email" value={nuevoAlumno.email} onChange={handleChange} /></label>
        </div>
        <div>
          <label>Domicilio: <input name="domicilio" value={nuevoAlumno.domicilio} onChange={handleChange} /></label>
        </div>
        <div>
          <label>Teléfono: <input name="telefono" value={nuevoAlumno.telefono} onChange={handleChange} /></label>
        </div>
        <button type="submit">Guardar Alumno</button>
      </form>
    </div>
  );
}

export default AgregarAlumno;

