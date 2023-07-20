const express = require('express');
const router = express.Router();

const controllers = require('./controllers');
const middleware = require('./middleware');

const messagesRouter = require('./chat/router');
router.use(middleware);

router.use('/:chatId', messagesRouter);
router.get('/', controllers.get);
router.post('/', controllers.post);

module.exports = router;
