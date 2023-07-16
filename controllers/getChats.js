const chatModel = require('../models/chat');
const mongodb = require('mongodb');
module.exports = async (req, res) => {
	await chatModel
		.find({ members: new mongodb.ObjectId(req.session.userId) })
		.then((result) => {
			console.log(result);
			res.status(400).send(result);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send('error while getting chats');
		});
};
