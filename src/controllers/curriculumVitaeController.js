const CurriculumVitaeService = require('../services/curriculumVitaeService');

const CurriculumVitaeController = {
  async upload(req, res) {
    const { studentId } = req.body;
    const filePath = req.file ? req.file.path : null; // Ruta del archivo subido

    try {
      const curriculum = await CurriculumVitaeService.uploadCurriculum(studentId, filePath);
      return res.status(201).json(curriculum);
    } catch (error) {
      console.error(error);
      if (error.message === 'El estudiante ya tiene un currículum subido. Por favor, elimínalo antes de subir uno nuevo.') {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: error.message || 'Error al subir el currículum' });
    }
  },

  async delete(req, res) {
    const { studentId } = req.params;

    try {
      const result = await CurriculumVitaeService.deleteCurriculum(studentId);
      return res.json(result);
    } catch (error) {
      console.error(error);
      if (error.message === 'Currículum no encontrado') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al eliminar el currículum' });
    }
  },

  async getByStudentId(req, res) {
    const { studentId } = req.params;

    try {
      const curriculum = await CurriculumVitaeService.getCurriculumByStudentId(studentId);
      return res.json(curriculum);
    } catch (error) {
      console.error(error);
      if (error.message === 'Currículum no encontrado') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al obtener el currículum' });
    }
  }
};

module.exports = CurriculumVitaeController;