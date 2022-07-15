const express = require('express');
const post = require('../controllers/postController');

const route = express.Router();

route.get('/', post.getAll);

module.exports = route;
