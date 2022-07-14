const express = require('express');
const login = require('../controllers/loginController');
const { validLogin } = require('../middlewares/loginValidation');

const route = express.Router();

route.post('/', validLogin, login.create);

module.exports = route;
