const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/studentController');

router.post('/', StudentController.create); // Public route for student registration

router.put('/:studentCode', /* authMiddleware, */ StudentController.update); // Middleware disabled

router.patch('/:studentCode', /* authMiddleware, */ StudentController.updateStatusRegister); // Middleware disabled

router.get('/id/:id', /* authMiddleware, */ StudentController.getById); // Middleware disabled

router.get('/code/:studentCode', /* authMiddleware, */ StudentController.getByCode); // Middleware disabled

router.get('/', /* authMiddleware, */ StudentController.getAll); // Middleware disabled

router.delete('/:studentCode', /* authMiddleware, */ StudentController.delete); // Middleware disabled

router.post('/login', StudentController.login); // Public route for login

router.get('/me', /* authMiddleware, */ StudentController.getStudentProfile); // Middleware disabled

router.get('/:id/last-applied-offer', /* authMiddleware, */ StudentController.getLastAppliedOffer); // Middleware disabled

router.get('/:id/applied-offers/count', /* authMiddleware, */ StudentController.getAppliedOffersCount); // Middleware disabled

module.exports = router;