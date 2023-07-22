const models = require('./models');
const chatModel = models.chatModel;
const middleware = (req, res, next) => {
	const chatId = req.params.chatId;
	chatModel
		.findById(chatId)
		.then((result) => {
			if (result) {
				req.chatId = chatId;
				next();
			} else {
				res.status(400).send('invalid chat id');
			}
		})
		.catch((error) => {
			console.log(error);
			res.status(500).send('error while verifying chat id');
		});
};

module.exports = middleware;
