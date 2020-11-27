const jwt = require('jsonwebtoken');
const User = require('../models/user');

// check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, 'Hack CW', async (err, decodedToken) => {
        if (err) {
          res.locals.user = null;
          next();
        } else {
          let user = await User.findById(decodedToken.id);
          res.locals.user = user;
          next();
        }
      });
    } else {
      res.locals.user = null;
      next();
    }
  };


  module.exports = { checkUser}