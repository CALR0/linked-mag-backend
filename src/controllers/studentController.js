const StudentService = require('../services/studentService');
const PostulationService = require('../services/postulationService');
const bcrypt = require('bcrypt'); // para comparar password hasheado
const jwt = require('jsonwebtoken');

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

  async getByCode(req, res) {
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

  async getAll(req, res) {
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

  async login(req, res) {
    const { studentCode, password } = req.body;
    try {
      const student = await StudentService.findStudentByCode(studentCode);

      if (!student) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }

      // Compara la contraseña recibida con la almacenada (hashed)
      const validPassword = await bcrypt.compare(password, student.password);
      if (!validPassword) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }

      // Generar token JWT (ajusta el secret y expiración)
      const token = jwt.sign({ id: student.id, studentCode: student.studentCode }, process.env.JWT_SECRET || 'secreto', {
        expiresIn: '1h',
      });

      const { password: _, ...studentWithoutPassword } = student.toJSON();

      return res.json({
        token,
        student: studentWithoutPassword
      });
    } catch (error) {
      if (error.message === 'Estudiante no encontrado') {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }
      console.error('Error en login:', error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  async getStudentProfile(req, res) {
    try {
      const studentId = req.user.id; // Assuming user ID is available in req.user
      const student = await StudentService.getStudentById(studentId);
      return res.json(student);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener el perfil del estudiante' });
    }
  },

  async getLastAppliedOffer(req, res) {
    const { id } = req.params;
    try {
      const lastAppliedOffer = await PostulationService.getLastAppliedOffer(id);
      return res.json(lastAppliedOffer);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener la última oferta aplicada' });
    }
  },

  async getAppliedOffersCount(req, res) {
    const { id } = req.params;
    try {
      const count = await PostulationService.getAppliedOffersCount(id);
      return res.json({ count });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener el número de ofertas aplicadas' });
    }
  },
};

module.exports = StudentController;
