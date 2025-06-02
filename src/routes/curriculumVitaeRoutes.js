const express = require('express');
const router = express.Router();
const CurriculumVitaeController = require('../controllers/curriculumVitaeController');
const upload = require('../middlewares/uploadPdf');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/upload', /* authMiddleware, */ upload.single('file'), CurriculumVitaeController.upload); // Middleware disabled

router.get('/:studentId', /* authMiddleware, */ CurriculumVitaeController.getByStudentId); // Middleware disabled

router.delete('/:studentId', /* authMiddleware, */ CurriculumVitaeController.delete); // Middleware disabled

router.get('/', /* authMiddleware, */ CurriculumVitaeController.getAll); // Middleware disabled

router.put('/:studentId', /* authMiddleware, */ upload.single('file'), CurriculumVitaeController.update); // Middleware disabled

module.exports = router;