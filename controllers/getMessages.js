const messageModel = require('..models/message');
module.exports = async (req, res) => {
	const chatId = '';
	await messageModel
		.find({ chatId })
		.then((result) => {
			res.status(200).send(result);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send('error while getting messages');
		});
};
