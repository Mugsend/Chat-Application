const express = require('express');

const router = express.Router();
const userMiddleware = require('../middleware/userMiddleware');
const getFriends = require('../controllers/getFriends');
router.use(userMiddleware);
router.get('/', (req, res) => res.send('this is the users route'));
router.get('/friends', (req, res) => {});
module.exports = router;
