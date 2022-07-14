const express = require('express');
const user = require('../controllers/userController');
const { validUser } = require('../middlewares/userValidation');

const route = express.Router();

route.post('/', validUser, user.create);

module.exports = route;
