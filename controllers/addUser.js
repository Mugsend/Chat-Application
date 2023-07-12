const userModel = require('../models/user');

module.exports = async (req, res) => {
	const { username, password } = req.body;
	await new userModel({ username, password })
		.save()
		.then((result) => {
			console.log(result);
			res.status(200).send('done');
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send('error while adding user');
		});
};
