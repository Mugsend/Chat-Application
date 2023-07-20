const models = require('../models');
const services = require('./services');

const signInController = (req, res) => {
	const { username, password } = req.body;
	const userModel = models.userModel;
	userModel
		.findOne({ username, password })
		.then((result) => {
			if (result) {
				const userId = result._id;
				const token = services.generateJWTToken(userId);

				res.cookie('token', token, {
					withCredentials: true,
					httpOnly: false, // cookie will be removed after 8 hours
				});
				res.send('loggedIn');
			} else {
				res.status(400).send('user not found');
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send('error while login');
		});
};

const signUpController = (req, res) => {
	const { username, password } = req.body;
	const userModel = models.userModel;
	userModel
		.findOne({ username })
		.then((result) => {
			if (!result) {
				const user = new userModel({ username, password });
				user
					.save()
					.then(() => res.send('account created successfully'))
					.catch((error) => {
						console.log(error);
						res.status(500).send('error while creating account');
					});
			} else {
				res.status(400).send('user already exists');
			}
		})
		.catch((error) => {
			console.log(error);
			res.status(500).send('error while creating account');
		});
};

module.exports = {
	signInController,
	signUpController,
};
