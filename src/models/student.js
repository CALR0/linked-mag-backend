const bcrypt = require('bcryptjs');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      // Relación: Un estudiante tiene muchas postulaciones
      Student.hasMany(models.Postulation, {
        foreignKey: 'studentId',
        as: 'postulations'
      });

      // Relación: Un estudiante tiene un currículum
      Student.hasOne(models.CurriculumVitae, {
        foreignKey: 'studentId',
        as: 'curriculum'
      });
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
      validate: {
        len: [10, 10],
        isNumeric: true
      },
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    academicProgram: {
      type: DataTypes.JSONB, // almacenar un array o objeto JSON
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