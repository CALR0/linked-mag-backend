const fs = require('fs');
const path = require('path');
const { CurriculumVitae, Student } = require('../models/index');

const CurriculumVitaeService = {
  async uploadCurriculum(studentId, filePath) {
    // Verificar si el estudiante existe
    const student = await Student.findByPk(studentId);
    if (!student) {
      throw new Error('Estudiante no encontrado');
    }

    // Verificar si ya existe un currículum para el estudiante
    const existingCurriculum = await CurriculumVitae.findOne({ where: { studentId } });
    if (existingCurriculum) {
      // Si ya existe, lanzar error (esto es correcto para la lógica de upload)
      throw new Error('El estudiante ya tiene un currículum subido. Por favor, elimínalo antes de subir uno nuevo.');
    }

    // Crear el currículum
    const curriculum = await CurriculumVitae.create({
      studentId,
      filePath
    });

    return curriculum;
  },

  async deleteCurriculum(studentId) {
    // Verificar si el currículum existe
    const curriculum = await CurriculumVitae.findOne({ where: { studentId } });
    if (!curriculum) {
      throw new Error('Currículum no encontrado');
    }

    // Eliminar el archivo físico si existe
    if (curriculum.filePath) {
      const absoluteFilePath = path.join(__dirname, '../../', curriculum.filePath);
      if (fs.existsSync(absoluteFilePath)) {
        try {
           fs.unlinkSync(absoluteFilePath); // Elimina el archivo de forma síncrona
        } catch (unlinkError) {
           console.error('Error al eliminar el archivo del currículum:', unlinkError);
        }
      } else {
          console.warn(`Archivo no encontrado en la ruta esperada: ${absoluteFilePath}`);
      }
    }

    // Eliminar el registro de la base de datos
    await curriculum.destroy();
    return { message: 'Currículum eliminado correctamente' };
  },

  async getCurriculumByStudentId(studentId) {
    const curriculum = await CurriculumVitae.findOne({
      where: { studentId },
      include: { model: Student, as: 'student' }
    });

    // *** MODIFICACIÓN: Devuelve null si no se encuentra, en lugar de lanzar un error ***
    return curriculum || null;
  },

  async updateCurriculum(studentId, filePath) {
    const curriculum = await CurriculumVitae.findOne({ where: { studentId } });
    if (!curriculum) {
      throw new Error('Currículum no encontrado');
    }

    // Eliminar el archivo anterior si existe
    if (curriculum.filePath) {
      const absoluteFilePath = path.join(__dirname, '../../', curriculum.filePath);
      if (fs.existsSync(absoluteFilePath)) {
        try {
          fs.unlinkSync(absoluteFilePath);
        } catch (unlinkError) {
          console.error('Error al eliminar el archivo anterior:', unlinkError);
        }
      }
    }

    // Actualizar el registro con la nueva ruta
    curriculum.filePath = filePath;
    await curriculum.save();
    return curriculum;
  },

  async getAllCurricula() {
    return await CurriculumVitae.findAll({
      include: { model: Student, as: 'student' }
    });
  },
};

module.exports = CurriculumVitaeService;
