const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/', controllers.getController);
router.post('/', controllers.postController);

module.exports = router;
