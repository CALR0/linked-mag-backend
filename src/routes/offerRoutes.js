const express = require('express');
const router = express.Router();
const OfferController = require('../controllers/offerController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, OfferController.create); // Requires authentication

router.put('/:id', authMiddleware, OfferController.update); // Requires authentication

router.get('/', OfferController.getAllOffers); // Public route for viewing all offers

router.delete('/:id', authMiddleware, OfferController.delete); // Requires authentication

router.get('/:id', OfferController.getOfferById); // Public route for viewing a specific offer

module.exports = router;