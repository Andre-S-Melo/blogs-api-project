const categoryService = require('../services/categoryService');

const getAll = async (_req, res, next) => {
  try {
    const categories = await categoryService.getAll();

    return res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const { name } = req.body;

    const newCategory = await categoryService.create({ name });

    return res.status(201).json(newCategory);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  create,
};
