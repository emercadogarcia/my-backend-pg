'use strict';

const { DATAXLS_TABLE, DataxlsSchema } = require('./../models/dataxls.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(DATAXLS_TABLE, DataxlsSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(DATAXLS_TABLE);
  }
};
