const multer = require('multer');
const path = require('path');
const CurriculumVitaeService = require('./../services/curriculumVitaeService'); // Importa el servicio

// Configuración de almacenamiento para multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads')); // Carpeta donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
    cb(null, uniqueSuffix);
  }
});

// Filtro para aceptar solo archivos PDF y verificar si el estudiante ya tiene un currículum
const fileFilter = async (req, file, cb) => {
  if (file.mimetype !== 'application/pdf') {
    return cb(new Error('Solo se permiten archivos PDF'), false);
  }

  const studentId = req.body.studentId; // Obtenemos studentId del cuerpo de la solicitud

  if (!studentId) {
      return cb(new Error('studentId no proporcionado en la solicitud.'), false);
  }

  try {
      const existingCurriculum = await CurriculumVitaeService.getCurriculumByStudentId(studentId);

      if (existingCurriculum) {
          return cb(new Error('El estudiante ya tiene un currículum subido. Por favor, elimínalo antes de subir uno nuevo.'), false);
      }
      cb(null, true);

  } catch (error) {
      console.error('Error en fileFilter al verificar currículum:', error);
      cb(new Error('Error interno al verificar el currículum.'), false);
  }
};

// Configuración de multer
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // Límite de 5 MB
});

module.exports = upload;
