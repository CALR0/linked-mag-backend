const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/companyController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', CompanyController.create); // Public route for company registration

router.put('/:NIT', /* authMiddleware, */ CompanyController.update); // Middleware disabled

router.patch('/:NIT', /* authMiddleware, */ CompanyController.updateStatusRegister); // Middleware disabled

router.get('/:NIT', /* authMiddleware, */ CompanyController.read); // Middleware disabled

router.get('/', /* authMiddleware, */ CompanyController.readAll); // Middleware disabled

router.delete('/:NIT', /* authMiddleware, */ CompanyController.delete); // Middleware disabled

router.post('/login', CompanyController.login); // Public route for login

module.exports = router;