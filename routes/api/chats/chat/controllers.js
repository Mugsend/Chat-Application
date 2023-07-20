const { chatModel, userModel } = require('./models');
const getController = (req, res) => {
	const chatId = req.chatId;
	chatModel
		.findById(chatId)
		.then((chat) => {
			const userId = req.userId;
			const chatUsers = chat.users;
			const memberId = chatUsers
				.filter((chatUserId) => chatUserId != userId)
				.join();
			userModel
				.findById(memberId)
				.then((user) => {
					const data = {
						userId: user._id,
						username: user.username,
					};

					res.json(data);
				})
				.catch((error) => {
					console.log(error);
					res.status(500).send('error while getting chat');
				});
		})
		.catch((error) => {
			console.log(error);
			res.status(500).send('error while getting chat');
		});
};

module.exports = {
	getController,
};
