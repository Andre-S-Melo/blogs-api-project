const err = require('../utils/error');
const { User, BlogPost, Category } = require('../database/models');

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
  });

  return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
  });

  if (!post) throw err(404, 'Post does not exist');

  return post;
};

module.exports = {
  getAll,
  getById,
};
