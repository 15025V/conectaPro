import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  rol: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [rol, setRol] = useState<string | null>(null);

  // ✅ Cargar token SOLO si es válido
  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken && storedToken.split(".").length === 3) {
      setToken(storedToken);
      setRol(localStorage.getItem("role"));
    }
  }, []);

  // ✅ Login seguro (NO hacer logout si el token viene mal)
  const login = (newToken: string) => {
    if (!newToken || newToken.split(".").length !== 3) {
      console.warn("⚠️ Token inválido recibido");
      return;
    }

    try {
      const decoded = JSON.parse(atob(newToken.split(".")[1]));
      const userRole = decoded.rol || null;

      localStorage.setItem("token", newToken);
      localStorage.setItem("role", userRole);

      setToken(newToken);
      setRol(userRole);
    } catch (err) {
      console.error("❌ Error al decodificar token:", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken(null);
    setRol(null);
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{ token, login, logout, isAuthenticated, rol }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
};
