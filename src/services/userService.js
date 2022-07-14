require('dotenv').config();
const jwt = require('jsonwebtoken');
const err = require('../utils/error');
const { User } = require('../database/models');

const create = async ({ displayName, email, password, image }) => {
  const userExists = await User.findOne({ where: { email } });

  if (userExists) throw err(409, 'User already registered');

  const newUser = await User.create({ displayName, email, password, image });

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: newUser.email }, process.env.JWT_SECRET, jwtConfig);

  return { token };
};

module.exports = {
  create,
};
