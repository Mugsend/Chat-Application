const express = require('express');

const router = express.Router();

const chatRouter = require('./chats/router');
const authRouter = require('./auth/router');

router.use('/auth', authRouter);
router.use('/chats', chatRouter);

module.exports = router;
