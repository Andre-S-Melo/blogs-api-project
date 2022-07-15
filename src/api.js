const express = require('express');
const user = require('./routes/userRoute');
const post = require('./routes/postRoute');
const login = require('./routes/loginRoute');
const category = require('./routes/categoryRoute');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use('/user', user);
app.use('/post', post);
app.use('/login', login);
app.use('/categories', category);

app.use(errorHandler);

module.exports = app;
