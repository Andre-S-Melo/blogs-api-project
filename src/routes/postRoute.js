const express = require('express');
const post = require('../controllers/postController');
const validateJWT = require('../middlewares/validateJWT');
const { validPost, validUpdate } = require('../middlewares/postValidation');

const route = express.Router();

route.get('/', validateJWT, post.getAll);
route.post('/', validateJWT, validPost, post.create);
route.get('/search', validateJWT, post.getBySearch);
route.get('/:id', validateJWT, post.getById);
route.put('/:id', validateJWT, validUpdate, post.update);
route.delete('/:id', validateJWT, post.remove);

module.exports = route;
