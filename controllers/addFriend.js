const userModel = require('../models/user');
const mongodb = require('mongodb');
module.exports = (req, res) => {
	userModel
		.updateOne(
			{ _id: new mongodb.ObjectId(req.session.userId) },
			{ $push: { friends: new mongodb.ObjectId('64ad26ec029d346fbff91ab4') } },
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
