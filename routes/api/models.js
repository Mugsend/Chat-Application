const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	profilePictuePath: { type: String },
	chats: { type: [mongoose.Schema.Types.ObjectId], ref: 'chat' },
});

const userModel = mongoose.model('user', userSchema);
module.exports = {
	userModel,
};
