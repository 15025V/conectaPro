
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ProfesionalForm from './pages/Formulario/ProfesionalForm'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        <Route path="/Formulario" element={
          <ProfesionalForm
           />
        } />
      </Routes>
    </BrowserRouter>

    
  )
}

export default App
