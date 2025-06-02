const express = require('express');
const router = express.Router();
const CurriculumVitaeController = require('../controllers/curriculumVitaeController');
const upload = require('../middlewares/uploadPdf');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/upload', authMiddleware, upload.single('file'), CurriculumVitaeController.upload); // Requires authentication

router.get('/:studentId', authMiddleware, CurriculumVitaeController.getByStudentId); // Requires authentication

router.delete('/:studentId', authMiddleware, CurriculumVitaeController.delete); // Requires authentication

router.get('/', authMiddleware, CurriculumVitaeController.getAll); // Requires authentication

router.put('/:studentId', authMiddleware, upload.single('file'), CurriculumVitaeController.update); // Requires authentication

module.exports = router;