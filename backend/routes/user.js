const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/user');

router.router('/register').post(register);
router.router('/login').post(login);

module.exports = router;