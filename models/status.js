const mongoose = require('mongoose');
const statusSchema = mongoose.Schema({
	media: { type: String, required: true },
	caption: { type: String },
});
module.exports = mongoose.model('status', statusSchema);
