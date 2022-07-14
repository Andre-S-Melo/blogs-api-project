const express = require('express');
const login = require('./routes/loginRoute');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use('/login', login);

app.use(errorHandler);

module.exports = app;
