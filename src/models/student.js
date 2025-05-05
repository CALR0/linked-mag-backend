const bcrypt = require('bcryptjs');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      // define association here si luego se necesita
    }
  }

  Student.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    studentCode: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    academicPrograms: {
      type: DataTypes.JSONB,  // Aquí se usa JSONB para almacenar un array o objeto JSON
      allowNull: false,
      defaultValue: []
    }
  }, {
    sequelize,
    modelName: 'Student',
    tableName: 'students',
    timestamps: true,
    hooks: {
      beforeCreate: async (student) => {
        if (student.password) {
          const salt = await bcrypt.genSalt(10);
          student.password = await bcrypt.hash(student.password, salt);
        }
      }
    }
  });

  return Student;
};
