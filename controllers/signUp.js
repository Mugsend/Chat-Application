const userModel = require('../models/user');
module.exports = async (req, res) => {
	const { username, password } = req.body;
	await new userModel({ username, password })
		.save()
		.then((result) => {
			console.log(result);
			res.status(200).send('account has been creating');
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send('error while creating account');
		});
};
