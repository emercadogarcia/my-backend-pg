'use strict';

const { UserSchema, USER_TABLE} = require('./../models/user.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    /**   aqui debes crear todos los modelos  y correr la migracion
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
