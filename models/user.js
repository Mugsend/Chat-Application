const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	profilePictuePath: { type: String },
	friends: { type: [mongoose.Schema.Types.ObjectId], ref: 'user' },
});
module.exports = mongoose.model('user', userSchema);