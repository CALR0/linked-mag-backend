const express = require('express');
const router = express.Router();
const PostulationController = require('../controllers/postulationController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', PostulationController.create); // Requires authentication

router.put('/:id', PostulationController.update); // Requires authentication

router.get('/:id', PostulationController.read); // Requires authentication

router.get('/', PostulationController.readAll); // Requires authentication

router.delete('/:id', PostulationController.delete); // Requires authentication

router.post('/offers/:offerId/apply', PostulationController.createPostulationByOffer); // Requires authentication

router.get('/offers/:offerId/postulations', PostulationController.getPostulationsByOffer);

module.exports = router;