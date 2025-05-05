const { Student } = require('../models/index');

const StudentController = {
  // Método de registro (sin cambios)
  async register(req, res) {
    try {
      const { name, email, password, studentCode, academicPrograms } = req.body;

      const newStudent = await Student.create({
        name,
        email,
        password,
        studentCode,
        academicPrograms
      });

      const { password: _, ...studentWithoutPassword } = newStudent.toJSON();

      return res.status(201).json(studentWithoutPassword);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al registrar al estudiante' });
    }
  },

  // Método para actualizar los datos de un estudiante
  async update(req, res) {
    const { studentCode } = req.params;  // Obtener el studentCode desde la URL
    const { name, password, academicPrograms } = req.body;  // Datos a actualizar

    try {
      // Buscar al estudiante por su studentCode
      const student = await Student.findOne({ where: { studentCode } });

      if (!student) {
        return res.status(404).json({ message: 'Estudiante no encontrado' });
      }

      // Actualizar solo los campos permitidos
      student.name = name || student.name;
      student.password = password || student.password;
      student.academicPrograms = academicPrograms || student.academicPrograms;

      // Guardar los cambios
      await student.save();

      // Excluir la contraseña antes de devolver la respuesta
      const { password: _, ...updatedStudent } = student.toJSON();

      return res.json(updatedStudent);  // Devolver los datos del estudiante actualizado
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al actualizar los datos del estudiante' });
    }
  }
};

module.exports = StudentController;
