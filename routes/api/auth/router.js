const express = require('express');
const router = express.Router();

const middleware = require('./middleware');

const { getController } = require('./controllers');

const chatsRouter = require('./chats/router');
const usersRouter = require('./users/router');

router.use(middleware);

router.use('/chats', chatsRouter);
router.use('/users', usersRouter);

router.get('/', getController);

module.exports = router;
