const userModel = require('../models/user');
module.exports = async (req, res) => {
	const { username } = req.body;
	await userModel
		.findOne({ username })
		.then((result) => {
			console.log(result);
			res.status(200).send(!result ? true : false);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send('error while checking username availability');
		});
};
