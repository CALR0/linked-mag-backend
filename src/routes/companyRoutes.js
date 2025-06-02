const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/companyController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', CompanyController.create); // Public route for company registration

router.put('/:NIT', authMiddleware, CompanyController.update); // Requires authentication

router.patch('/:NIT', authMiddleware, CompanyController.updateStatusRegister); // Requires authentication

router.get('/:NIT', authMiddleware, CompanyController.read); // Requires authentication

router.get('/', authMiddleware, CompanyController.readAll); // Requires authentication

router.delete('/:NIT', authMiddleware, CompanyController.delete); // Requires authentication

router.post('/login', CompanyController.login); // Public route for login

module.exports = router;