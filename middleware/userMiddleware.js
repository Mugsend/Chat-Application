module.exports = (req, res, next) => {
	console.log(req.session.user);
	if (req.session.user) next();
	else res.send('you are not authorized for this route!');
};
