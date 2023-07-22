const models = require('./models');
const chatModel = models.chatModel;
const userModel = models.userModel;
const getController = (req, res) => {
	const userId = req.userId;
	const userModel = models.userModel;
	userModel
		.findById(userId)
		.then((user) => {
			if (user) {
				const chatIds = user.chats;
				const chatModel = models.chatModel;
				chatModel
					.find({ _id: chatIds })
					.then((result) => {
						res.send(result);
					})
					.catch((error) => {
						console.log(error);
						res.status(500).send('error getting chat');
					});
			} else {
				res.status(400).send('user not found');
			}
		})
		.catch((error) => {
			console.log(error);
			res.status(500).send('error while getting chats');
		});
};

const postController = (req, res) => {
	const userId = req.userId;
	const { memberId } = req.body;

	const chat = new chatModel({ users: [userId, memberId] });
	chat
		.save()
		.then((chat) => {
			const chatId = chat._id;
			userModel
				.updateMany({ _id: [userId, memberId] }, { $push: { chats: chatId } })
				.then(res.send(chat))
				.catch((error) => {
					console.log(error);
					res.status(500).send('error while creating chat');
				});
		})
		.catch((error) => {
			console.log(error);
			res.status(500).send('error while creating chats');
		});
};

module.exports = {
	getController,
	postController,
};
