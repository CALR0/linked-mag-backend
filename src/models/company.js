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
    nameCompany: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emailCompany: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    phoneCompany: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    NIT: {
      type: DataTypes.BIGINT,
      unique: true,
      allowNull: false
    },
    addressCompany: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deparmentCompany: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cityCompany: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descriptionCompany: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profileImage: {
      type: DataTypes.STRING, // URL de la imagen de perfil
      allowNull: true
    },
    banner: {
      type: DataTypes.STRING, // URL del banner
      allowNull: true
    },
    selectTypeCompany: {
      type: DataTypes.STRING,
      allowNull: false
    },
    selectEconomicSector: {
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