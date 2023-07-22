const { userModel } = require('../../../models');
const getController = (req, res) => {
	const { userId } = req.params;
	userModel
		.findById(userId)
		.then((user) => {
			if (user) res.send(user);
			else res.status(400).send('user not found');
		})
		.catch((error) => {
			console.log(error);
			res.status(500).send('error while getting user');
		});
};
module.exports = {
	getController,
};
