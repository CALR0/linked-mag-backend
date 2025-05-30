const express = require('express');
const router = express.Router();
const PostulationController = require('../controllers/postulationController');

router.post('/', PostulationController.create);

router.put('/:id', PostulationController.update);

router.get('/:id', PostulationController.read);

router.get('/', PostulationController.readAll);

router.delete('/:id', PostulationController.delete);

module.exports = router;