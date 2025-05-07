# Linked-Mag Backend

![Badge Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Badge Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Badge PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Badge JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

Backend para la gestión de prácticas profesionales en la Universidad del Magdalena.

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)
- [Base de Datos](#base-de-datos)

## 📝 Descripción

Este proyecto proporciona una API RESTful para gestionar el proceso de prácticas profesionales en la Universidad del Magdalena, permitiendo la conexión entre estudiantes, empresas y coordinadores académicos.

## 🛠️ Tecnologías

- **Node.js** - Entorno de ejecución para JavaScript
- **Express** - Framework web para Node.js
- **PostgreSQL** - Sistema de gestión de bases de datos relacional
- **Sequelize** - ORM para Node.js
- **JWT** - JSON Web Tokens para autenticación
- **Otros paquetes** - bcrypt, cors, dotenv, etc.
  
## 🚀 Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/linked-mag-backend.git
   cd linked-mag-backend
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

## ⚙️ Configuración

1. Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

   ```
   PORT=3000
   DB_NAME=linkedmag_db
   DB_USER=postgres
   DB_PASSWORD=1234
   DB_HOST=localhost
   DB_PORT=5432
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

   > **Nota:** Ajusta los valores según tu entorno local.

## 🗄️ Base de Datos

1. **Crear la base de datos**:
   ```bash
   npx sequelize-cli db:create
   ```

2. **Ejecutar migraciones** para crear las tablas:
   ```bash
   npm run migrate
   # o alternativamente:
   npx sequelize-cli db:migrate
   ```

3. **Cargar datos iniciales** (seeders):
   ```bash
   npx sequelize-cli db:seed:all
   ```

## 🏃‍♂️ Ejecución

Para iniciar el servidor en modo desarrollo:
```bash
npm run dev
```

El servidor estará disponible en [http://localhost:3000](http://localhost:3000) (o el puerto configurado en las variables de entorno).

---

© 2025
