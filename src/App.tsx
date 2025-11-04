import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import ProtectedRoute from "./Components/ProtectedRoute"
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard"
import Register from "./pages/Register"
import { ReloadProvider } from "./context/ReloadContext"   

function App() {
  return (
    <ReloadProvider>    // Por checar 
      <BrowserRouter>

        <Routes> //Proteger rutas
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />

          <Route
            path="/Home"
            element={
              <ProtectedRoute requiredRole="usuario">
                <Home />
              </ProtectedRoute> 
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          {/* Si es que llega a buscar otras rutas */}
          <Route
            path="*"
            element={<div className="text-center p-10">Página no encontrada</div>}
          />

        </Routes>

      </BrowserRouter>
    </ReloadProvider>
  )
}

export default App
