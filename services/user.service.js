const boom = require('@hapi/boom');

const getConnection = require('../libs/postgres');

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  // vamos a cambiar por el pool de conexiones
  async find() {
    const client = await getConnection();
    const rta = await client.query('SELECT * FROM task');
    return rta.rows;
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
