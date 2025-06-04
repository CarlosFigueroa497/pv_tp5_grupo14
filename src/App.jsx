import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ListaAlumnos from './pages/ListaAlumnos'
import AgregarAlumno from './pages/AgregarAlumno'
import EditarAlumno from './pages/EditarAlumno'
import DetalleAlumno from './pages/DetalleAlumno'
import AcercaDe from './pages/AcercaDe'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { useState } from 'react';

function App() {

  const [alumnos, setAlumnos] = useState([
    {
      id: 'APU00999',
      nombre: 'Jairo',
      apellido: 'Tapia',
      curso: 'Tercero',
      email: 'hernanjairo@mail.com',
      domicilio: 'Av. Congreso 125',
      telefono: '3884895999'
    }
  ])

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/alumnos' element={<ListaAlumnos alumnos={alumnos} setAlumnos={setAlumnos} />} />
          <Route path='/alumnos/nuevo' element={<AgregarAlumno setAlumnos={setAlumnos} />} />
          <Route path='/alumnos/:id' element={<DetalleAlumno alumnos={alumnos} />} />
          <Route path='/alumnos/:id/editar' element={<EditarAlumno alumnos={alumnos} setAlumnos={setAlumnos} />} />
          <Route path='/acerca' element={<AcercaDe />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App
