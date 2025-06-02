const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/studentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', StudentController.create); // Public route for student registration

router.put('/:studentCode', authMiddleware, StudentController.update); // Requires authentication

router.patch('/:studentCode', StudentController.updateStatusRegister); // Requires authentication

router.get('/id/:id', authMiddleware, StudentController.getById); // Requires authentication

router.get('/code/:studentCode', authMiddleware, StudentController.getByCode); // Requires authentication

router.get('/', authMiddleware, StudentController.getAll); // Requires authentication

router.delete('/:studentCode', authMiddleware, StudentController.delete); // Requires authentication

router.post('/login', StudentController.login); // Public route for login

router.get('/me', authMiddleware, StudentController.getStudentProfile); // Requires authentication

router.get('/:id/last-applied-offer', authMiddleware, StudentController.getLastAppliedOffer); // Requires authentication

router.get('/:id/applied-offers/count', authMiddleware, StudentController.getAppliedOffersCount); // Requires authentication

module.exports = router;