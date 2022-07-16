const { Router } = require('express');
const post = require('../controllers/postController');
const validateJWT = require('../middlewares/validateJWT');
const { validPost, validUpdate } = require('../middlewares/postValidation');

const router = Router();

router.get('/', validateJWT, post.getAll);
router.post('/', validateJWT, validPost, post.create);
router.get('/search', validateJWT, post.getBySearch);
router.get('/:id', validateJWT, post.getById);
router.put('/:id', validateJWT, validUpdate, post.update);
router.delete('/:id', validateJWT, post.remove);

module.exports = router;
