import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditarAlumno({ alumnos, setAlumnos }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const alumnoExistente = alumnos.find(a => a.id === id);

  const [formAlumno, setFormAlumno] = useState({
    id: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: ''
  });

  // precargar datos uando se encuentra el alumnos
  useEffect(() => {
    if (alumnoExistente) {
      setFormAlumno(alumnoExistente);
    }
  }, [alumnoExistente]);

  const handleChange = (e) => {
    setFormAlumno({
      ...formAlumno,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const alumnosActualizados = alumnos.map((alumno) =>
      alumno.id === id ? formAlumno : alumno
    );

    setAlumnos(alumnosActualizados);
    navigate('/alumnos');
  };

  if (!alumnoExistente) {
    return <h2>Alumno no encontrado</h2>;
  }

  return (
    <div>
      <h2>Editar Alumno</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>LU: <input name="id" value={formAlumno.id} onChange={handleChange} disabled /></label>
        </div>
        <div>
          <label>Nombre: <input name="nombre" value={formAlumno.nombre} onChange={handleChange} /></label>
        </div>
        <div>
          <label>Apellido: <input name="apellido" value={formAlumno.apellido} onChange={handleChange} /></label>
        </div>
        <div>
          <label>Curso: <input name="curso" value={formAlumno.curso} onChange={handleChange} /></label>
        </div>
        <div>
          <label>Email: <input name="email" value={formAlumno.email} onChange={handleChange} /></label>
        </div>
        <div>
          <label>Domicilio: <input name="domicilio" value={formAlumno.domicilio} onChange={handleChange} /></label>
        </div>
        <div>
          <label>Teléfono: <input name="telefono" value={formAlumno.telefono} onChange={handleChange} /></label>
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default EditarAlumno;

