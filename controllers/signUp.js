const userModel = require('../models/user');
module.exports = async (req, res) => {
	const { username, password } = req.body;
	const result = await userModel.findOne({ username });
	if (result) {
		console.log(result);
		res.send('already exists');
	} else {
		const user = new userModel({ username, password });
		await user
			.save()
			.then((resp) => {
				console.log(resp);
				res.send('account has been made');
			})
			.catch((err) => {
				console.log(err);
				res.send('failed to create account');
			});
	}
};
