const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { config } = require('./../config/config');

const router = express.Router();


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


module.exports = router;
