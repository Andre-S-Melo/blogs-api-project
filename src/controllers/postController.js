const postService = require('../services/postService');

const getAll = async (_req, res, next) => {
  try {
    const posts = await postService.getAll();

    return res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
};
