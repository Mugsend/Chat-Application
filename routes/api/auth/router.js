const express = require('express');
const router = express.Router();
const { signInController, signUpController } = require('./controllers');

router.post('/signin', signInController);
router.post('/signup', signUpController);

module.exports = router;
