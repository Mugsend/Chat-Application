const Message = require('../models/message');
module.exports = async (content, sender, receiver) => {
	const message = new Message({
		content,
		sender,
		receiver,
	});
	await message.save();
};
