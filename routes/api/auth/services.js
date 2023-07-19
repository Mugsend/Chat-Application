const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key';

const generateJWTToken = (user_Id) => {
	const token = jwt.sign({ user_Id }, secretKey);
	return token;
};

module.exports = {
	generateJWTToken,
};
