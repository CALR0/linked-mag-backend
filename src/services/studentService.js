const { Student } = require('../models/index');
const bcrypt = require('bcryptjs');

const StudentService = {
  async createStudent(data) {
    const { name, email, password, studentCode, academicProgram, statusRegister } = data;

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
      statusRegister: statusRegister ?? null // Permite nulo si no se envía
    });

    const { password: _, ...studentWithoutPassword } = newStudent.toJSON();
    return studentWithoutPassword;
  },

  async updateStudent(studentCode, data) {
    const { name, email, password, studentCode: newStudentCode, academicProgram, statusRegister } = data;

    const student = await Student.findOne({ where: { studentCode } });
    if (!student) {
      throw new Error('Estudiante no encontrado');
    }

    if (name !== undefined) student.name = name;
    if (email !== undefined) student.email = email;
    if (newStudentCode !== undefined) student.studentCode = newStudentCode;
    if (academicProgram !== undefined) student.academicProgram = academicProgram;
    if (statusRegister !== undefined) student.statusRegister = statusRegister;

    // Solo hashea si el password viene en el body y es diferente
    if (password && password !== student.password) {
      const salt = await bcrypt.genSalt(10);
      student.password = await bcrypt.hash(password, salt);
    }

    await student.save();

    const { password: _, ...updatedStudent } = student.toJSON();
    return updatedStudent;
  },

  async updateStatusRegister(studentCode, statusRegister) {
    const student = await Student.findOne({ where: { studentCode } });
    if (!student) {
      throw new Error('Estudiante no encontrado');
    }
    student.statusRegister = statusRegister;
    await student.save();
    const { password: _, ...studentWithoutPassword } = student.toJSON();
    return studentWithoutPassword;
  },

  async findStudentByCode(studentCode) {
    const student = await Student.findOne({ where: { studentCode } });
    if (!student) {
      throw new Error('Estudiante no encontrado');
    }
    // Solo permitir login si el estado es 'Aprobado'
    if (student.statusRegister !== 'Aprobado') {
      throw new Error('Tu registro aún no ha sido aprobado por la universidad.');
    }
    return student;
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