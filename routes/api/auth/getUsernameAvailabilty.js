const models = require('../models');
module.exports = async (req, res) => {
	const userModel = models.userModel;
	const { username } = req.body;
	userModel
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
