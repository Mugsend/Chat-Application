const express = require('express');
const router = express.Router();

const controllers = require('./controllers');
const middleware = require('./middleware');

router.use(middleware);

router.get('/', controllers.get);
router.post('/', controllers.post);

module.exports = router;
