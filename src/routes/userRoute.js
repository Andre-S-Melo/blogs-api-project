const express = require('express');
const user = require('../controllers/userController');
const validateJWT = require('../middlewares/validateJWT');
const { validUser } = require('../middlewares/userValidation');

const route = express.Router();

route.get('/', validateJWT, user.getAll);
route.post('/', validUser, user.create);
route.get('/:id', user.getById);

module.exports = route;
