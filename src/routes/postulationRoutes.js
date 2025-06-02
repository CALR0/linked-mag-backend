const express = require('express');
const router = express.Router();
const PostulationController = require('../controllers/postulationController');
// const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', /* authMiddleware, */ PostulationController.create); // Middleware disabled

router.put('/:id', /* authMiddleware, */ PostulationController.update); // Middleware disabled

router.get('/:id', /* authMiddleware, */ PostulationController.read); // Middleware disabled

router.get('/', /* authMiddleware, */ PostulationController.readAll); // Middleware disabled

router.delete('/:id', /* authMiddleware, */ PostulationController.delete); // Middleware disabled

router.post('/offers/:offerId/apply', /* authMiddleware, */ PostulationController.createPostulationByOffer); // Middleware disabled

router.get('/offers/:offerId/postulations', /* authMiddleware, */ PostulationController.getPostulationsByOffer); // Middleware disabled

router.patch('/:id/status', PostulationController.updateStatusByCompany);

module.exports = router;