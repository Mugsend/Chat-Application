const express = require('express');

const router = express.Router();
const userMiddleware = require('../middlewares/userMiddleware');
const getFriends = require('../controllers/getFriends');
const addFriend = require('../controllers/addFriend');
const getChats = require('../controllers/getChats');
const getMessages = require('../controllers/getMessages');
router.use(userMiddleware);
router.get('/', (req, res) => res.send('this is the users route'));
router.get('/friends', (req, res) => getFriends(req, res));
router.get('/addFriend', (req, res) => addFriend(req, res));
router.get('/chats', (req, res) => getChats(req, res));
router.get('/messages', (req, res) => getMessages(req, res));
module.exports = router;
