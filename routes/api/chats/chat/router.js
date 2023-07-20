const express = require('express');

const middleware = require('./middleware');
const router = express.Router({
	mergeParams: true,
});

const messagesRouter = require('./messages/router');

router.use(middleware);
router.use('/messages', messagesRouter);

router.delete('/', (req, res) => res.send('delete chat request'));

module.exports = router;
