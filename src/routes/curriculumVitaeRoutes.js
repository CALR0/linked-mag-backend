const express = require('express');
const router = express.Router();
const CurriculumVitaeController = require('../controllers/curriculumVitaeController');
const upload = require('../middlewares/uploadPdf');

router.post('/upload', upload.single('file'), CurriculumVitaeController.upload);

router.get('/:studentId', CurriculumVitaeController.getByStudentId);

router.delete('/:studentId', CurriculumVitaeController.delete);

module.exports = router;