const user = require('../models/user');
module.exports = (req, res) => {
	const { username } = req.body;
	user
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
