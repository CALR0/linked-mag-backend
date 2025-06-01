const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/companyController');

router.post('/', CompanyController.create);

router.put('/:NIT', CompanyController.update);

router.patch('/:NIT', CompanyController.updateStatusRegister);

router.get('/:NIT', CompanyController.read);

router.get('/', CompanyController.readAll);

router.delete('/:NIT', CompanyController.delete);

router.post('/login', CompanyController.login);

module.exports = router;