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
   DB_NAME=linked_mag_db
   DB_USER=admin
   DB_PASSWORD=123123
   DB_HOST=db
   DB_PORT=5432
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

   > **Nota:** Ajusta los valores según tu entorno local.

2. Opcional: para desarrollo local sin Docker, cambia el parametro a DB_HOST=localhost.

## 🔧 Uso con Docker

1.  Asegúrate de tener Docker y Docker Compose instalados.
    
2.  Levantar los contenedores:
    
    ```bash
    docker-compose up -d --build
    
    ```
    
3.  Aplicar migraciones, seeders dentro del contenedor de backend y ejecutar:
    
    ```bash
    docker-compose exec backend npx sequelize-cli db:migrate
    docker-compose exec backend npx sequelize-cli db:seed:all
    docker-compose exec backend npm run dev
    ```
    
4.  Para detener y limpiar contenedores:
    
    ```bash
    docker-compose down
    
    ```

## 🗄️ Base de Datos Local

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
