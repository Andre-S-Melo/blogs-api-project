require('dotenv').config();
const jwt = require('jsonwebtoken');
const err = require('../utils/error');
const { User } = require('../database/models');

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!user) throw err(404, 'User does not exist');

  return user;
};

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

const remove = async (id) => {
  await User.destroy({
    where: { id },
  });
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
};
