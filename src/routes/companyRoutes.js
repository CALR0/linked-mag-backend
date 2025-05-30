const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/companyController');

router.post('/', CompanyController.create);

router.put('/:nitCode', CompanyController.update);

router.get('/:nitCode', CompanyController.read);

router.get('/', CompanyController.readAll);

router.delete('/:nitCode', CompanyController.delete);

module.exports = router;