const express = require('express');
const router = express.Router();
const { create, update, read, readAll, delete: deleteCompany } = require('../controllers/company.controller');

router.post('/', create);

router.put('/:nitCode', update);

router.get('/:nitCode', read);

router.get('/', readAll);

router.delete('/:nitCode', deleteCompany);

module.exports = router;