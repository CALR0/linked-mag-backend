const express = require('express');
const dotenv = require('dotenv');
const studentRoutes = require('./src/routes/studentRoutes');
const companyRoutes = require('./src/routes/companyRoutes');
const offerRoutes = require('./src/routes/offerRoutes');
const postulationRoutes = require('./src/routes/postulationRoutes');
const db = require('./src/models/index');  // Importamos la configuración de Sequelize

dotenv.config();

const app = express();
app.use(express.json());

// Verificamos la conexión a la base de datos antes de iniciar el servidor
db.sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');

    // Enlazar las rutas
    app.use('/api/students', studentRoutes);
    app.use('/api/companies', companyRoutes);
    app.use('/api/offers', offerRoutes);
    app.use('/api/postulations', postulationRoutes);

    const PORT = process.env.PORT || 3000;

    app.get('/', (req, res) => {
      res.send('API de Linked-Mag funcionando');
    });

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
    process.exit(1); // Si no se puede conectar a la base de datos, detenemos el servidor
  });
