const express = require('express');

const port = 3000;

const app = express();

const path = require('path');
const cors = require('cors');
const dbConnect = require('./services/dbConnect');
const apiRouter = require('./routes/api/router');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

app.get('/', (req, res) => {
	res.send('hello World');
});

app.use('/api', apiRouter);

app.use((err, req, res, next) => {
	res.status(400).send(err);
});

app.listen(port, () => {
	dbConnect();
	console.log('listening...');
});
