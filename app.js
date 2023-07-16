const express = require('express');

const port = 3000;

const app = express();
const session = require('express-session');
const userRoute = require('./routes/user');
const cors = require('cors');
const path = require('path');
const dbConnect = require('./services/dbConnect');
const handleLogin = require('./controllers/login');
const handleSignUp = require('./controllers/signUp');
const mongodb = require('mongodb');
const getUsernameAvailabilty = require('./controllers/getUsernameAvailabilty');
app.use(
	session({
		resave: false,
		saveUninitialized: false,
		secret: 'keyboard cat',
	}),
);
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/', (req, res) => {
	res.send('hello World');
});
app.get('/setsession', (req, res) => {
	req.session.userId = new mongodb.ObjectId('64ad25bbc168a71ec8fa8eb6');
	res.send('ok');
});
app.post('/api/login', (req, res) => handleLogin(req, res));
app.post('/api/signUp', (req, res) => handleSignUp(req, res));
app.post('/api/checkUsernameAvailability', (req, res) =>
	getUsernameAvailabilty(req, res),
);
app.use('/api/user', userRoute);
app.use((err, req, res, next) => {
	res.status(400).send(err);
});

app.listen(port, () => {
	dbConnect();
	console.log('listening...');
});
