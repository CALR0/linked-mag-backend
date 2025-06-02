const express = require('express');
const router = express.Router();
const PostulationController = require('../controllers/postulationController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', PostulationController.create);

router.put('/:id', PostulationController.update);

router.get('/:id', PostulationController.read);

router.get('/', PostulationController.readAll);

router.delete('/:id', PostulationController.delete);

router.post('/offers/:offerId/apply', authMiddleware, PostulationController.createPostulationByOffer);

module.exports = router;