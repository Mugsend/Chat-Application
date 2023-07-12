const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
	chatId: { type: mongoose.Schema.Types.ObjectId, ref: 'chat', required: true },
	content: { type: String, required: true },
	sender: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
	timestamp: { type: Date, default: Date.now },
});
module.exports = mongoose.model('message', messageSchema);
