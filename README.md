# CONECTAPRO

CONECTAPRO es una plataforma para conectar profesionales con usuarios que buscan servicios especializados. El proyecto incluye un backend con Express + Prisma y un frontend con React + Vite + TailwindCSS.

## 🧱 Estructura

- **Frontend:** React + Vite + TailwindCSS
- **Backend:** Express + Prisma + PostgreSQL
- **Base de datos:** Modelo `Profesional` con campos enriquecidos (experiencia, ubicación, contacto, imagen, etc.)

## 🚀 Funcionalidades

- Listado paginado de profesionales
- Formulario completo para agregar profesionales
- Cards dinámicas con información visual
- Edición desde Postman o frontend
- Categorías fijas y selector de modalidad

## 📦 Instalación

```bash
cd frontend
npm install
npm run dev

```

## 📁 Estructura del proyecto
```plaintext
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── Components/
    │   ├── ProtectedRoute.tsx
    │   ├── Buttons/
    │   ├── Card/
    │   ├── CheckList/
    │   ├── Footer/
    │   ├── NavBar/
    │   ├── Pagination/
    │   ├── Sections/
    │   └── Split/
    ├── context/
    └── pages/
        ├── Home.tsx
        ├── Login.tsx
        ├── Register.tsx
        ├── AdminDashboard/
        └── Formulario/
```
# 🛠️ Herramientas utilizadas
Frontend: React, Vite, TailwindCSS, React Router

Backend: Express, Prisma, PostgreSQL, JWT

Dev Tools: Postman, GitHub
