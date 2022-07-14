const express = require('express');
const user = require('../controllers/userController');
const validateJWT = require('../middlewares/validateJWT');
const { validUser } = require('../middlewares/userValidation');

const route = express.Router();

route.get('/', validateJWT, user.getAll);
route.post('/', validUser, user.create);
route.delete('/me', validateJWT, user.remove);
route.get('/:id', validateJWT, user.getById);

module.exports = route;
