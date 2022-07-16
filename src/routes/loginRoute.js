const { Router } = require('express');
const login = require('../controllers/loginController');
const { validLogin } = require('../middlewares/loginValidation');

const router = Router();

router.post('/', validLogin, login.create);

module.exports = router;
