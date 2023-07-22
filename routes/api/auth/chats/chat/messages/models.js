const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
	chatId: { type: mongoose.Schema.Types.ObjectId, ref: 'chat', required: true },
	content: { type: String, required: true },
	sender: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
	timestamp: { type: Date, default: Date.now },
	reply: { type: mongoose.Schema.Types.ObjectId, ref: 'message' },
});

const messageModel = mongoose.model('message', messageSchema);

module.exports = {
	messageModel,
};
