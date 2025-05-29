const StudentService = require('../services/studentService');

const StudentController = {

  async create(req, res) {
    try {
      const studentData = {
        ...req.body,
        academicProgram: req.body.academicProgram || {}
      };

      const student = await StudentService.createStudent(studentData);
      return res.status(201).json(student);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(409).json({ // 409 Conflict
          message: 'El correo o código estudiantil ya está registrado',
        });
      }
      console.error("Error al registrar estudiante:", error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  async update(req, res) {
    const { studentCode } = req.params;

    try {
      const updatedStudent = await StudentService.updateStudent(studentCode, req.body);
      return res.json(updatedStudent);
    } catch (error) {
      console.error(error);
      if (error.message === 'Estudiante no encontrado') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al actualizar los datos del estudiante' });
    }
  },

  async read(req, res) {
    const { studentCode } = req.params;

    try {
      const student = await StudentService.getStudentByCode(studentCode);
      return res.json(student);
    } catch (error) {
      console.error(error);
      if (error.message === 'Estudiante no encontrado') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al obtener los datos del estudiante' });
    }
  },

  async getById(req, res) {
    const { id } = req.params;

    try {
      const student = await StudentService.getStudentById(id);
      return res.json(student);
    } catch (error) {
      console.error(error);
      if (error.message === 'Estudiante no encontrado') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al obtener los datos del estudiante' });
    }
  },

  async readAll(req, res) {
    try {
      const students = await StudentService.getAllStudents();
      return res.json(students);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener la lista de estudiantes' });
    }
  },

  async delete(req, res) {
    const { studentCode } = req.params;

    try {
      const result = await StudentService.deleteStudent(studentCode);
      return res.json(result);
    } catch (error) {
      console.error(error);
      if (error.message === 'Estudiante no encontrado') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al eliminar al estudiante' });
    }
  },
};

module.exports = StudentController;
