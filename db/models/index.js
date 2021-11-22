const { User, UserSchema } = require ('./user.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  // se incremena los modelo cuanto tengan
}

module.exports = setupModels;
