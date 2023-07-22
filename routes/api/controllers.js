const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key';
const { userModel } = require('./models');

const signinController = (req, res) => {
	const { username, password } = req.body;
	userModel
		.findOne({ username, password })
		.then((result) => {
			if (result) {
				const userId = result._id;
				const token = jwt.sign({ userId }, secretKey);
				res.send(token);
			} else {
				res.status(400).send('wrong creds');
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send('error while login');
		});
};

const signupController = (req, res) => {
	const { username, password } = req.body;
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

const usernameController = (req, res) => {
	const { username } = req.query;
	userModel
		.findOne({ username })
		.then((user) =>
			user
				? res.status(201).send(user._id.toString())
				: res.send('user not found'),
		)
		.catch((error) => {
			console.log(error);
			res.status(500).send('error while getting user');
		});
};
module.exports = {
	usernameController,
	signinController,
	signupController,
};
