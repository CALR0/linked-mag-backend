const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/studentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', StudentController.create);

router.put('/:studentCode', StudentController.update);

router.get('/id/:id', StudentController.getById);

router.get('/code/:studentCode', StudentController.getByCode);

router.get('/', StudentController.getAll);

router.delete('/:studentCode', StudentController.delete);

router.post('/login', StudentController.login);

router.get('/me', authMiddleware, StudentController.getStudentProfile);

router.get('/:id/last-applied-offer', StudentController.getLastAppliedOffer);

router.get('/:id/applied-offers/count', StudentController.getAppliedOffersCount);

module.exports = router;

