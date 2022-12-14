require('dotenv').config();
const jwt = require('jsonwebtoken');
const err = require('../utils/error');
const { User } = require('../database/models');

const create = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) throw err(400, 'Invalid fields');

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user.email }, process.env.JWT_SECRET, jwtConfig);

  return { token };
};

module.exports = {
  create,
};
