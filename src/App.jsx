import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ListaAlumnos from './pages/ListaAlumnos'
import AgregarAlumno from './pages/AgregarAlumno'
import EditarAlumno from './pages/EditarAlumno'
import DetalleAlumno from './pages/DetalleAlumno'
import AcercaDe from './pages/AcercaDe'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/alumnos' element={<ListaAlumnos />} />
        <Route path='/alumnos/nuevo' element={<AgregarAlumno />} />
        <Route path='/alumnos/:id' element={<DetalleAlumno />} />
        <Route path='/alumnos/:id/editar' element={<EditarAlumno />} />
        <Route path='/acerca' element={<AcercaDe />} />
      </Routes>
    </>
  )
}

export default App
