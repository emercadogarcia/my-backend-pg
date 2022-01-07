const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { config } = require('./../config/config');
const AuthService = require('../services/auth.service');
const { response } = require('express');

const router = express.Router();
const service = new AuthService;

router.post('/login',
  passport.authenticate('local', {session: false}),
  async (req, res, next) => {
      try {
        const user = req.user;
        const payload = {
          sub: user.id,
          role: user.role
        }
        const access_token = jwt.sign(payload, config.claveK);
        res.json({access_token}); //orignal podemos usar {user,token} para devolver todo el profile y token
      } catch (error) {
        next(error);
      }
});


router.get('/profile',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
      try {
        const user = req.user;
        res.json({user});
      } catch (error) {
        next(error);
      }
});

router.post('/recovery',
  async (req, res, next) => {
      try {
        const { email } = req.body;
        const rta = await service.sendRecovery(email);
        res.json(rta);
      } catch (error) {
        next(error);
      }
});

router.post('/change-password',
// schema para validar
  async (req, res, next) => {
      try {
        const { token, newPassword } = req.body;
        const rta= await service.changePassword(token, newPassword);
        res.json(rta);
      } catch (error) {
        next(error);
      }
});

module.exports = router;
