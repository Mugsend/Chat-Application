const models = require('./models');
const messageModel = models.messageModel;

const getController = (req, res) => {
	const chatId = req.chatId;
	messageModel
		.find({ chatId })
		.then((result) => {
			res.json(result);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).send('error while getting messages');
		});
};

const postController = (req, res) => {
	const { chatId, userId } = req;
	const { content, reply } = req.body;
	const message = new messageModel({ chatId, content, sender: userId, reply });
	message
		.save()
		.then((result) => {
			const messageId = result._id;
			res.send(messageId);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).send('error while adding message');
		});
};
module.exports = {
	getController,
	postController,
};
