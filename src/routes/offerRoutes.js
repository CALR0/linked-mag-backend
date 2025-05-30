const express = require('express');
const router = express.Router();
const { create, update, read, readAll, delete: deleteOffer, getAllOffers } = require('../controllers/offerController');

router.post('/', create);

router.put('/:id', update);

router.get('/:id', read);

router.get('/', getAllOffers);

router.delete('/:id', deleteOffer);

module.exports = router;