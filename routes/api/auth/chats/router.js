const express = require('express');
const router = express.Router();

const { getController, postController } = require('./controllers');

const chatRouter = require('./chat/router');

router.use('/:chatId', chatRouter);
router.get('/', getController);
router.post('/', postController);

module.exports = router;
