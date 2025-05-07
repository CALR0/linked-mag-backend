const StudentService = require('../services/studentService');

const StudentController = {

  async create(req, res) {
    try {
      const student = await StudentService.createStudent(req.body);
      return res.status(201).json(student);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al crear al estudiante' });
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
