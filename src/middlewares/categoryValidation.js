const schema = require('./schemas');
const err = require('../utils/error');

const validCategory = (req, _res, next) => {
  const { error } = schema.categorySchema.validate(req.body);

  if (error) next(err(400, error.message));

  next();
};

module.exports = validCategory;
