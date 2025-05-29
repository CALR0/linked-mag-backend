const express = require('express');
const router = express.Router();
const { create, update, getByCode, getById, getAll, delete: deleteStudent, login} = require('../controllers/studentController');

router.post('/', create);

router.put('/:studentCode', update);

router.get('/id/:id', getById);

router.get('/code/:studentCode', getByCode);

router.get('/', getAll);

router.delete('/:studentCode', deleteStudent);

router.post('/login', login);

module.exports = router;
