'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CurriculumVitae extends Model {
    static associate(models) {
      // Relación: Un currículum pertenece a un estudiante
      CurriculumVitae.belongsTo(models.Student, {
        foreignKey: 'studentId',
        as: 'student'
      });
    }
  }

  CurriculumVitae.init({
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    filePath: {
      type: DataTypes.STRING, // Ruta o nombre del archivo PDF
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'CurriculumVitae',
    tableName: 'curriculumVitae',
    timestamps: true
  });

  return CurriculumVitae;
};