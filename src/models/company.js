'use strict';
const bcrypt = require('bcryptjs');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      // Relación: Una empresa tiene muchas ofertas
      Company.hasMany(models.Offer, {
        foreignKey: 'companyId',
        as: 'offers'
      });
    }
  }
  Company.init({
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
    nitCode: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Company',
    tableName: 'companies',
    timestamps: true,
    hooks: {
      beforeCreate: async (company) => {
        if (company.password) {
          const salt = await bcrypt.genSalt(10);
          company.password = await bcrypt.hash(company.password, salt);
        }
      }
    }
  });
  return Company;
};