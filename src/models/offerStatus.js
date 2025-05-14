'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OfferStatus extends Model {
    static associate(models) {
      // Relación: Un estado pertenece a una oferta
      OfferStatus.belongsTo(models.Offer, {
        foreignKey: 'offerId',
        as: 'offer'
      });
    }
  }

  OfferStatus.init({
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['Pendiente', 'Abierta', 'Cerrada']]
      }
    },
    offerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'OfferStatus',
    tableName: 'offerStatuses',
    timestamps: true
  });

  return OfferStatus;
};