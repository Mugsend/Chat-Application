const userModel = require('../models/user');
module.exports = async (req, res) => {
	const { username, password } = req.body;
	await userModel
		.findOne({ username, password }, { _id: 1 })
		.then((result) => {
			console.log(result);
			if (result) req.session.user = result._id;
			res.status(200).send(result ? true : false);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send('error while login');
		});
};
