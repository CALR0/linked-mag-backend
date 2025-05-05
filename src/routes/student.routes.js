const express = require('express');
const router = express.Router();
const { create, update, read, readAll, delete: deleteStudent } = require('../controllers/student.controller');

// Ruta para crear un estudiante
router.post('/create', create);

// Ruta para actualizar los datos de un estudiante (por studentCode)
router.put('/:studentCode', update);

// Ruta para obtener un estudiante por studentCode
router.get('/:studentCode', read);

// Ruta para obtener todos los estudiantes
router.get('/', readAll);

// Ruta para eliminar un estudiante por studentCode
router.delete('/:studentCode', deleteStudent);

module.exports = router;
