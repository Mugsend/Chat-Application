const express = require('express');

const { getController } = require('./controllers');

const router = express.Router({
	mergeParams: true,
});

router.get('/', getController);

module.exports = router;
