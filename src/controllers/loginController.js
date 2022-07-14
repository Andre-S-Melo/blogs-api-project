const loginService = require('../services/loginService');

const create = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await loginService.create({ email, password });

    return res.status(200).json({ token: user.token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};
