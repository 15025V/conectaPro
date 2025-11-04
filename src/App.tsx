import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import ProtectedRoute from "./Components/ProtectedRoute"
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard"
import Register from "./pages/Register"
import { ReloadProvider } from "./context/ReloadContext"   // ✅ IMPORTANTE

function App() {
  return (
    <ReloadProvider>     {/* ✅ ENVUELVE TODA TU APP */}
      <BrowserRouter>

        <Routes>
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
