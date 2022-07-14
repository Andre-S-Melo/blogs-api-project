const userService = require('../services/userService');

const getAll = async (_req, res, next) => {
  try {
    const users = await userService.getAll();

    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;

    const newUser = await userService.create({ displayName, email, password, image });

    return res.status(201).json({ token: newUser.token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  create,
};
