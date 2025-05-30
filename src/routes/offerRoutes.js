const express = require('express');
const router = express.Router();
const OfferController = require('../controllers/offerController');

router.post('/', OfferController.create);

router.put('/:id', OfferController.update);

router.get('/', OfferController.getAllOffers);

router.delete('/:id', OfferController.delete);

router.get('/:id', OfferController.getOfferById);

module.exports = router;