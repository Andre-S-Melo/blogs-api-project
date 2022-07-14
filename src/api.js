const express = require('express');
const user = require('./routes/userRoute');
const login = require('./routes/loginRoute');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use('/user', user);
app.use('/login', login);

app.use(errorHandler);

module.exports = app;
