require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const create = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, jwtConfig);

  return { token };
};

module.exports = {
  create,
};
