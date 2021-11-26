// aqui todos los modelos
const { User, UserSchema } = require ('./user.model');
const { Customer, CustomerSchema } = require ('./customer.model');


function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  // se incremena los modelo cuanto tengan
  Customer.init(CustomerSchema, Customer.config(sequelize));

  Customer.associate(sequelize.models);
}

module.exports = setupModels;
