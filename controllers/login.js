const userModel = require('../models/user');
module.exports = async (req, res) => {
	const { username, password } = req.body;
	await userModel
		.findOne({ username, password }, { _id: 1 })
		.then((result) => {
			if (result) req.session.user = user._id;
			res.status(200).send(result ? true : false);
		})
		.catch((err) => {
			concole.log(err);
			res.status(500).send('error while login');
		});
};
