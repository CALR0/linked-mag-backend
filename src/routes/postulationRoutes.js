const express = require('express');
const router = express.Router();
const { create, update, read, readAll, delete: deletePostulation } = require('../controllers/postulationController');

router.post('/', create);

router.put('/:id', update);

router.get('/:id', read);

router.get('/', readAll);

router.delete('/:id', deletePostulation);

module.exports = router;