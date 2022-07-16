const { Router } = require('express');
const user = require('./userRoute');
const post = require('./postRoute');
const login = require('./loginRoute');
const category = require('./categoryRoute');

const router = Router();

router.use('/user', user);
router.use('/post', post);
router.use('/login', login);
router.use('/categories', category);

module.exports = router;
