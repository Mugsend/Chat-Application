const userModel = require('../models/user');
const mongodb = require('mongodb');
module.exports = (req, res) => {
	const { friendUserId } = req.body;
	userModel
		.updateOne(
			{ _id: new mongodb.ObjectId(req.session.userId) },
			{ $push: { friends: new mongodb.ObjectId(friendUserId) } },
		)
		.then((result) => {
			console.log(result);
			res.status(200).send('friend added');
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send('error while adding friend');
		});
};
