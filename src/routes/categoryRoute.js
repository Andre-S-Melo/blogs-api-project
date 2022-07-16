const { Router } = require('express');
const validateJWT = require('../middlewares/validateJWT');
const validCategory = require('../middlewares/categoryValidation');
const category = require('../controllers/categoryController');

const router = Router();

router.get('/', validateJWT, category.getAll);
router.post('/', validateJWT, validCategory, category.create);

module.exports = router;
