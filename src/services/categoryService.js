const { Category } = require('../database/models');

const create = async ({ name }) => {
  const newCategory = await Category.create({ name });

  return newCategory;
};

module.exports = {
  create,
};
