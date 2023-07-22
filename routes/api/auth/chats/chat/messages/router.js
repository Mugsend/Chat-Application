const express = require('express');

const router = express.Router();

const controllers = require('./controllers');
const getController = controllers.getController;
const postController = controllers.postController;

const messageRouter = require('./message/router');

router.use('/:messageId', messageRouter);
router.get('/', getController);
router.post('/', postController);

module.exports = router;
