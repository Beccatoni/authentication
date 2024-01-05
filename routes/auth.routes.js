const express = require('express');
const { signUp} = require('../controllers/auth.controllers');
const authRoute = express.Router();

authRoute.post('/signUp', signUp);

module.exports = authRoute;