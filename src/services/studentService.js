const { Student } = require('../models/index');

const StudentService = {
  async createStudent(data) {
    const { name, email, password, studentCode, academicProgram } = data;

    // Validar academicProgram
    if (!academicProgram?.name || !academicProgram?.code) {
      throw new Error('El programa académico debe tener nombre y código');
    }

    const newStudent = await Student.create({
      name,
      email,
      password,
      studentCode,
      academicProgram,
    });

    const { password: _, ...studentWithoutPassword } = newStudent.toJSON();
    return studentWithoutPassword;
  },

  async updateStudent(studentCode, data) {
    const { name, password, academicProgram } = data;

    const student = await Student.findOne({ where: { studentCode } });
    if (!student) {
      throw new Error('Estudiante no encontrado');
    }

    student.name = name || student.name;
    student.password = password || student.password;
    student.academicProgram = academicProgram || student.academicProgram;

    await student.save();

    const { password: _, ...updatedStudent } = student.toJSON();
    return updatedStudent;
  },

  async findStudentByCode(studentCode) {
    const student = await Student.findOne({ where: { studentCode } });
    if (!student) {
      throw new Error('Estudiante no encontrado');
    }
    return student; // con password incluido, SOLO para login
  },


  async getStudentByCode(studentCode) {
    const student = await this.findStudentByCode(studentCode);
    const { password: _, ...studentWithoutPassword } = student.toJSON();
    return studentWithoutPassword;
  },


  async getStudentById(id) {
    const student = await Student.findOne({ where: { id } });
    if (!student) {
      throw new Error('Estudiante no encontrado');
    }
    const { password: _, ...studentWithoutPassword } = student.toJSON();
    return studentWithoutPassword;
  },

  async getAllStudents() {
    const students = await Student.findAll();
    return students.map(student => {
      const { password: _, ...studentWithoutPassword } = student.toJSON();
      return studentWithoutPassword;
    });
  },

  async deleteStudent(studentCode) {
    const student = await Student.findOne({ where: { studentCode } });
    if (!student) {
      throw new Error('Estudiante no encontrado');
    }
    await student.destroy();
    return { message: 'Estudiante eliminado correctamente' };
  },
};

module.exports = StudentService;