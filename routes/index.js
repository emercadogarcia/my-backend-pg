const express = require('express');

const customersRouter = require('./customers.router');
const usersRouter = require('./users.router');
const dataXlsRouter = require('./dataxls.router');
const authRouter = require('./auth.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/customers', customersRouter);
  router.use('/users', usersRouter);
  router.use('/dataload', dataXlsRouter);
  router.use('/auth', authRouter);

}

module.exports = routerApi;
