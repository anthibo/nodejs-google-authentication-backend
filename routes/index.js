const express = require('express');
const passport = require('passport')
require('../utills/auth')

const router = express.Router();

/* GET home page. */
router.get('/auth/google', function (req, res, next) {
  passport.authenticate('google', { scope: ['email', 'profile'] })
});
router.get('/protected', function (req, res, next) {
  res.json({ message: 'Login Success !' });
});

module.exports = router;
