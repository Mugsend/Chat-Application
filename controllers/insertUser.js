const User = require('../models/user');
async function insertUser(req, res) {
	const user = new User({ name: 'saurabh', password: '201836' });
	await user
		.save()
		.then(() => {
			res.send('done');
		})
		.catch((err) => {
			res.send({ error: err });
		});
}
module.exports = insertUser;
