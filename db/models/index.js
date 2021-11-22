const { User, UserSchema } = require ('./user.model');
// aqui todos los modelos

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  // se incremena los modelo cuanto tengan
}

module.exports = setupModels;
