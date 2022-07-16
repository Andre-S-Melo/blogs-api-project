const { Router } = require('express');
const user = require('../controllers/userController');
const validateJWT = require('../middlewares/validateJWT');
const { validUser } = require('../middlewares/userValidation');

const router = Router();

router.get('/', validateJWT, user.getAll);
router.post('/', validUser, user.create);
router.delete('/me', validateJWT, user.remove);
router.get('/:id', validateJWT, user.getById);

module.exports = router;
