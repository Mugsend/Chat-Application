const mongoose = require('mongoose');
module.exports = async () => {
	await mongoose
		.connect('mongodb://127.0.0.1:27017/mydatabase', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log('db connected'))
		.catch((err) => console.log('not connected: ', err));
};
