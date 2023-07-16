const chatModel = require('../models/chat');
module.exports = async (req, res) => {
	const { memberUserId } = req.body;
	const members = [req.session.userId, memberUserId];
	await new chatModel({ members })
		.save()
		.then((result) => {
			console.log(result);
			res.status(200).send('chat created');
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send('error while creating chat');
		});
};
