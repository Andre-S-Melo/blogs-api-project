const express = require('express');
const category = require('../controllers/categoryController');

const route = express.Router();

route.post('/', category.create);

module.exports = route;
