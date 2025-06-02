const express = require('express');
const router = express.Router();
const OfferController = require('../controllers/offerController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', /* authMiddleware, */ OfferController.create); // Middleware disabled

router.put('/:id', /* authMiddleware, */ OfferController.update); // Middleware disabled

router.get('/', OfferController.getAllOffers); // Public route for viewing all offers

router.delete('/:id', /* authMiddleware, */ OfferController.delete); // Middleware disabled

router.get('/:id', OfferController.getOfferById); // Public route for viewing a specific offer

router.get('/company', /* authMiddleware, */ OfferController.getAllOffersByCompany); // Middleware disabled

module.exports = router;