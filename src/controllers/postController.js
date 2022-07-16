const postService = require('../services/postService');

const getAll = async (_req, res, next) => {
  try {
    const posts = await postService.getAll();

    return res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await postService.getById(+id);

    return res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

const getBySearch = async (req, res, next) => {
  try {
    const { q } = req.query;

    const search = await postService.getBySearch(q);

    return res.status(200).json(search);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { title, content, categoryIds } = req.body;

    const newPost = await postService.create({ id, title, content, categoryIds });

    return res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const { title, content } = req.body;

    const editedPost = await postService.update(title, content, userId, +id);

    return res.status(200).json(editedPost);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    await postService.remove(userId, +id);

    return res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getById,
  getBySearch,
  create,
  update,
  remove,
};
