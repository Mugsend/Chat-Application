const userModel = require('../models/user');
module.exports = async (req, res) => {
	const { username, password } = req.body;
	console.log(username, password);
	const result = await userModel
		.findOne({ username, password })
		.then((user) => {
			if (user) {
				req.session.user = user;
				res.send('loggedIn');
			} else {
				res.send('wrong creds');
			}
		})
		.catch((err) => {
			concole.log(err);
			res.send('failed to login');
		});
};
