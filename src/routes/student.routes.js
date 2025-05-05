const express = require('express');
const router = express.Router();
const { create, update, read, readAll, delete: deleteStudent } = require('../controllers/student.controller');

router.post('/', create);

router.put('/:studentCode', update);

router.get('/:studentCode', read);

router.get('/', readAll);

router.delete('/:studentCode', deleteStudent);

module.exports = router;
