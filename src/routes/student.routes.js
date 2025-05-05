const express = require('express');
const router = express.Router();
const { register, update } = require('../controllers/student.controller');

// Ruta para registrar un estudiante
router.post('/register', register);

// Ruta para actualizar los datos de un estudiante (por studentCode)
router.put('/:studentCode', update);  

module.exports = router;
