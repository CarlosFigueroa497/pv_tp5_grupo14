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

  // precargar datos cuando se encuentra el alumno
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
    navigate('/alumnos', { state: { mensajeExito: '✅ Alumno editado con éxito' } });
  };

  if (!alumnoExistente) {
    return <h2>Alumno no encontrado</h2>;
  }

  const inputStyle = {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    color: '#333',
    backgroundColor: '#fff'
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '400px',
          gap: '15px',
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
          color: '#333',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Editar Alumno</h2>
        <label>LU:
          <input name="id" value={formAlumno.id} onChange={handleChange} disabled style={inputStyle} />
        </label>
        <label>Nombre:
          <input name="nombre" value={formAlumno.nombre} onChange={handleChange} style={inputStyle} />
        </label>
        <label>Apellido:
          <input name="apellido" value={formAlumno.apellido} onChange={handleChange} style={inputStyle} />
        </label>
        <label>Curso:
          <select
            name="curso"
            value={formAlumno.curso}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Seleccione un curso</option>
          <option value="Primero">Primero</option>
<option value="Segundo">Segundo</option>
<option value="Tercero">Tercero</option>
<option value="Cuarto">Cuarto</option>
<option value="Quinto">Quinto</option>
          </select>
        </label>
        <label>Email:
          <input name="email" value={formAlumno.email} onChange={handleChange} style={inputStyle} />
        </label>
        <label>Domicilio:
          <input name="domicilio" value={formAlumno.domicilio} onChange={handleChange} style={inputStyle} />
        </label>
        <label>Teléfono:
          <input name="telefono" value={formAlumno.telefono} onChange={handleChange} style={inputStyle} />
        </label>
        <button type="submit" style={{ marginTop: '10px', padding: '10px' }}>
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}

export default EditarAlumno;


