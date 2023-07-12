module.exports = (req, res, next) => {
	if (req.session.userId) next();
	else res.send('you are not authorized for this route!');
};
