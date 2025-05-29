const express = require('express');
const router = express.Router();
const { create, update, read, getById, readAll, delete: deleteStudent } = require('../controllers/studentController');

router.post('/', create);

router.put('/:studentCode', update);

router.get('/id/:id', getById);

router.get('/code/:studentCode', read);

router.get('/', readAll);

router.delete('/:studentCode', deleteStudent);

module.exports = router;
