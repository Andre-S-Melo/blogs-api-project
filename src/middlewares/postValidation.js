const schema = require('./schemas');
const err = require('../utils/error');

const validUpdate = (req, _res, next) => {
  const { error } = schema.updatePostSchema.validate(req.body);

  if (error) next(err(400, 'Some required fields are missing'));

  next();
};

module.exports = validUpdate;
