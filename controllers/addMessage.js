const messageModel = require('../models/message');
module.exports = async (content, sender, chatId) => {
	await new messageModel({
		chatId,
		content,
		sender,
	})
		.save()
		.then((result) => {
			console.log(result);
			res.status(200).send('message created');
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send('error while creating message');
		});
};
