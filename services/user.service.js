const boom = require('@hapi/boom');

// const getConnection = require('../libs/postgres');
// cambiamos por la siguiente:
const { models } = require('./../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  //cambiamos por el models para utilizar de mejor manera
  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
