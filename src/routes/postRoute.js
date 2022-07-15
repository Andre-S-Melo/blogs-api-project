const express = require('express');
const post = require('../controllers/postController');
const validateJWT = require('../middlewares/validateJWT');

const route = express.Router();

route.get('/', validateJWT, post.getAll);
route.get('/:id', validateJWT, post.getById);

module.exports = route;
