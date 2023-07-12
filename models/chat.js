const mongoose = require('mongoose');
const schema = new mongoose.Schema({
	members: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'user',
		required: true,
	},
});

module.exports = mongoose.model('chat', schema);
