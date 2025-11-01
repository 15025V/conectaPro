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

cd ../backend
npm install
npx prisma migrate dev
npm run dev
