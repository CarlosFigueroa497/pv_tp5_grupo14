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

    if (!nuevoAlumno.id || !nuevoAlumno.nombre || !nuevoAlumno.apellido) {
      alert('Por favor, completá al menos LU, nombre y apellido.');
      return;
    }

    setAlumnos((prevAlumnos) => [...prevAlumnos, nuevoAlumno]);
    navigate('/alumnos', { state: { mensajeExito: "✅ Alumno agregado con éxito" } });
  };

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
        <h2 style={{ textAlign: 'center' }}>Agregar Nuevo Alumno</h2>
        <label>LU:
          <input name="id" value={nuevoAlumno.id} onChange={handleChange} style={inputStyle} />
        </label>
        <label>Nombre:
          <input name="nombre" value={nuevoAlumno.nombre} onChange={handleChange} style={inputStyle} />
        </label>
        <label>Apellido:
          <input name="apellido" value={nuevoAlumno.apellido} onChange={handleChange} style={inputStyle} />
        </label>
        <label>Curso:
          <select
            name="curso"
            value={nuevoAlumno.curso}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Seleccione un curso</option>
            {[
              { value: 1, label: 'Primero' },
              { value: 2, label: 'Segundo' },
              { value: 3, label: 'Tercero' },
              { value: 4, label: 'Cuarto' },
              { value: 5, label: 'Quinto' }
            ].map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>
        <label>Email:
          <input name="email" value={nuevoAlumno.email} onChange={handleChange} style={inputStyle} />
        </label>
        <label>Domicilio:
          <input name="domicilio" value={nuevoAlumno.domicilio} onChange={handleChange} style={inputStyle} />
        </label>
        <label>Teléfono:
          <input name="telefono" value={nuevoAlumno.telefono} onChange={handleChange} style={inputStyle} />
        </label>
        <button type="submit" style={{ marginTop: '10px', padding: '10px' }}>
          Guardar Alumno
        </button>
      </form>
    </div>
  );
}

export default AgregarAlumno;
