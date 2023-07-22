const express = require('express');

const router = express.Router();

const authRouter = require('./auth/router');

const {
	usernameController,
	signinController,
	signupController,
} = require('./controllers');

router.use('/auth', authRouter);

router.get('/username', usernameController);
router.post('/signin', signinController);
router.post('/signup', signupController);

module.exports = router;
