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

const update = async (title, content, userId, id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
  });

  if (!post) throw err(404, 'Post does not exist');

  if (userId !== post.userId) throw err(401, 'Unauthorized user');

  post.set({
    title,
    content,
  });

  await post.save();

  return post;
};

const remove = async (userId, id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
  });

  if (!post) throw err(404, 'Post does not exist');

  if (userId !== post.userId) throw err(401, 'Unauthorized user');

  const deletePost = await BlogPost.destroy({
    where: { id },
  });

  return deletePost;
};

module.exports = {
  getAll,
  getById,
  update,
  remove,
};
