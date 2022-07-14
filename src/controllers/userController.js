const userService = require('../services/userService');

const getAll = async (_req, res, next) => {
  try {
    const users = await userService.getAll();

    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await userService.getById(+id);

    return res.status(200).json(user);
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

const remove = async (req, res, next) => {
  try {
    const { id } = req.user;

    await userService.remove(+id);

    return res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
};
