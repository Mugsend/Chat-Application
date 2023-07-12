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
	req.session.user = 'niggas';
	res.send('ok');
});
app.post('/api/login', (req, res) => handleLogin(req, res));
app.post('/api/signUp', (req, res) => handleSignUp(req, res));
app.use('/api/user', userRoute);
app.use((err, req, res, next) => {
	res.status(400).send(err);
});

app.listen(port, async () => {
	await dbConnect();
	console.log('listening...');
});
