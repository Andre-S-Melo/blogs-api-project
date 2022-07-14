const express = require('express');
const validateJWT = require('../middlewares/validateJWT');
const validCategory = require('../middlewares/categoryValidation');
const category = require('../controllers/categoryController');

const route = express.Router();

route.get('/', category.getAll);
route.post('/', validateJWT, validCategory, category.create);

module.exports = route;
