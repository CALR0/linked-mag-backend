const multer = require('multer');
const path = require('path');

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

// Filtro para aceptar solo archivos PDF
const fileFilter = (req, file, cb) => {
  if (file.mimetype !== 'application/pdf') {
    req.fileValidationError = 'Solo se permiten archivos PDF'; // Agregar mensaje de error a la solicitud
    return cb(null, false); // No lanzar error 500, solo rechazar el archivo
  }
  cb(null, true);
};

// Configuración de multer
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // Límite de 5 MB
});

module.exports = upload;
