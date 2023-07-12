const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
	content: { type: String, required: true },
	sender: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
	receiver: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: true,
	},
	timestamp: { type: Date, default: Date.now },
});
module.exports = mongoose.model('message', messageSchema);
