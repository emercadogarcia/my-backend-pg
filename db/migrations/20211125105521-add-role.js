'use strict';

const { UserSchema, USER_TABLE} = require('./../models/user.model');

module.exports = {
  // CUANDO ES LA PRIMERA migrations se debe hacer una sola creacion de las tablas.
  up: async (queryInterface) => {
  //   await queryInterface.addColumn(USER_TABLE,'role', UserSchema.role);
  },

  down: async (queryInterface) => {
  //   await queryInterface.removeColumn(USER_TABLE,'role');
   }
};
