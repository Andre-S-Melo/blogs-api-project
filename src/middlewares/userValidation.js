const schema = require('./schemas');
const err = require('../utils/error');

const validUser = (req, _res, next) => {
  const { error } = schema.userSchema.validate(req.body);

  if (error) next(err(400, error.message));

  next();
};

module.exports = {
  validUser,
};
