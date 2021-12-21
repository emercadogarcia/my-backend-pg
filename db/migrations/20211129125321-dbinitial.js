'use strict';
//utilizar esta migracion cuando sea ***la primera vez*** las otras quitarlas para que no interfieran.

const { DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE, UserSchema } = require('../models/userModel');
const { CUSTOMER_TABLE, CustomerSchema } = require('../models/customerModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);

  }
};
