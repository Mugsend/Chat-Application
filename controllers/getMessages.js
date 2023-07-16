const messageModel = require('../models/message');
module.exports = async (req, res) => {
	const { chatId } = req.body;
	await messageModel
		.find({ chatId })
		.then((result) => {
			console.log(chatId);
			res.status(200).send(result);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send('error while getting messages');
		});
};
