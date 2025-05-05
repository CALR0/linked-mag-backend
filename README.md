# Linked-Mag Backend

Backend para la gestión de prácticas profesionales en la Universidad del Magdalena.

## Tecnologías
- Node.js
- Express
- PostgreSQL
- JWT (para autenticación)

## Estructura del Proyecto
- `/src/routes` – Rutas de la API
- `/src/controllers` – Controladores de lógica
- `/src/models` – Modelos de datos
- `/src/config` – Configuración general

## Instalar dependencias

Desde consola ejecutaremos el siguiente comando desde la raíz del proyecto:

npm install

# Ejecutar migraciones

Desde consola ingresar lo siguiente para crear la base de datos:

npm run migrate

# Crear archivo .env en la raiz del proyecto

Ejemplo de lo que puede contener:

PORT=3000
DB_NAME=linkedmag_db
DB_USER=postgres
DB_PASSWORD=1234
DB_HOST=localhost
DB_PORT=5432

# Iniciar el proyecto

Desde consola ingresar lo siguiente para iniciar el servidor:

npm run dev