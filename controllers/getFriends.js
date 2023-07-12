const userModel = require('../models/user');
module.exports = async (req, res) => {
	await userModel
		.findOne({ _id: req.session.userId }, { friends: 1 })
		.then((result) => {
			console.log(result);
			res.status(200).send(result);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send('error while getting friends');
		});
};
