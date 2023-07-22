const express = require('express');

const middleware = require('./middleware');
const router = express.Router({
	mergeParams: true,
});

const messagesRouter = require('./messages/router');
const { getController } = require('./controllers');

router.use(middleware);
router.use('/messages', messagesRouter);
router.get('/', getController);
router.delete('/', (req, res) => res.send('delete chat request'));

module.exports = router;
