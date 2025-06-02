const express = require('express');
const router = express.Router();
const PostulationController = require('../controllers/postulationController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, PostulationController.create); // Requires authentication

router.put('/:id', authMiddleware, PostulationController.update); // Requires authentication

router.get('/:id', authMiddleware, PostulationController.read); // Requires authentication

router.get('/', authMiddleware, PostulationController.readAll); // Requires authentication

router.delete('/:id', authMiddleware, PostulationController.delete); // Requires authentication

router.post('/offers/:offerId/apply', authMiddleware, PostulationController.createPostulationByOffer); // Requires authentication

module.exports = router;