require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const validateJWT = async (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
      }

      const user = await User.findOne({ where: { email: decoded.data } });

      req.user = user;

      next();
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = validateJWT;
