const { Category } = require('../database/models');

const getAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

const create = async ({ name }) => {
  const newCategory = await Category.create({ name });

  return newCategory;
};

module.exports = {
  getAll,
  create,
};
