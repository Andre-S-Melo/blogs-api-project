const express = require('express');
const user = require('../controllers/userController');
const { validUser } = require('../middlewares/userValidation');

const route = express.Router();

route.get('/', user.getAll);
route.post('/', validUser, user.create);

module.exports = route;
