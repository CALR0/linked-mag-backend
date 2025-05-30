const fs = require('fs');
const path = require('path');
const CurriculumVitaeService = require('../services/curriculumVitaeService');

const CurriculumVitaeController = {
  async upload(req, res) {
    const { studentId } = req.body;
    const filePath = req.file ? req.file.path : null; // Ruta del archivo subido

    if (req.fileValidationError) {
      return res.status(400).json({ message: req.fileValidationError }); // Devolver error 400
    }

    try {
      const curriculum = await CurriculumVitaeService.uploadCurriculum(studentId, filePath);
      return res.status(201).json(curriculum);
    } catch (error) {
      console.error(error);
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
  },

  async update(req, res) {
    const { studentId } = req.params;
    const filePath = req.file ? req.file.path : null; // Ruta del archivo subido

    if (req.fileValidationError) {
      return res.status(400).json({ message: req.fileValidationError }); // Devolver error 400
    }

    try {
      const existingCurriculum = await CurriculumVitaeService.getCurriculumByStudentId(studentId);

      if (!existingCurriculum) {
        return res.status(404).json({ message: 'Currículum no encontrado' });
      }

      // Eliminar el archivo anterior si existe
      if (existingCurriculum.filePath) {
        const absoluteFilePath = path.join(__dirname, '../../', existingCurriculum.filePath);
        if (fs.existsSync(absoluteFilePath)) {
          try {
            fs.unlinkSync(absoluteFilePath); // Elimina el archivo anterior
          } catch (unlinkError) {
            console.error('Error al eliminar el archivo anterior:', unlinkError);
          }
        }
      }

      // Actualizar el registro con la nueva ruta
      const updatedCurriculum = await CurriculumVitaeService.updateCurriculum(studentId, filePath);
      return res.json(updatedCurriculum);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al actualizar el currículum' });
    }
  },

  async getAll(req, res) {
    try {
      const curricula = await CurriculumVitaeService.getAllCurricula();
      return res.json(curricula);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener los currículums' });
    }
  }
};

module.exports = CurriculumVitaeController;