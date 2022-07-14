const schema = require('./schemas');
const err = require('../utils/error');

const validLogin = (req, res, next) => {
  const { error } = schema.loginSchema.validate(req.body);

  if (error) next(err(400, 'Some required fields are missing'));

  next();
};

module.exports = {
  validLogin,
};
