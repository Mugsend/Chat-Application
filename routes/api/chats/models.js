const apiModels = require('../models');
const mongoose = require('mongoose');

const userModel = apiModels.userModel;

const chatSchema = mongoose.Schema({
	users: { type: [mongoose.SchemaTypes.ObjectId], ref: 'user', required: true },
});

const chatModel = mongoose.model('chat', chatSchema);

module.exports = {
	userModel,
	chatModel,
};
