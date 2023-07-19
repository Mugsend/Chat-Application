const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key';
function authenticate(req, res, next) {}

module.exports = (req, res, next) => {
	const token = req.headers.authorization;

	try {
		const decoded = jwt.verify(token, secretKey);
		const userId = decoded.user_Id;
		req.userId = userId;
		next();
	} catch (error) {
		res.status(401).json({ error: 'Invalid token' });
	}
};
