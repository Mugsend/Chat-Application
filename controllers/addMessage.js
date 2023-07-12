const messageModel = require('../models/message');
module.exports = async (content, sender, receiver) => {
	await new messageModel({
		content,
		sender,
		receiver,
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
