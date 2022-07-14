const express = require('express');
const validateJWT = require('../middlewares/validateJWT');
const category = require('../controllers/categoryController');

const route = express.Router();

route.post('/', validateJWT, category.create);

module.exports = route;
