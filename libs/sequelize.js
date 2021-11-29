const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

// const USER = encodeURIComponent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPasword);
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const options = {
  dialect: 'postgres',
  logging:  config.isProd ? false : true,
}

if (config.isProd) {
  options.ssl = {
    rejectUnauthorized: false
  }
}
const sequelize = new Sequelize(config.dbUrl, options);

// ejecutamos la  conexcion
setupModels(sequelize);

//sincronizamos para que creen las tablas schemas
// sequelize.sync();     //se va utilizar con migrations de sequelize

module.exports = sequelize;
