const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/tugas');
const db = require('./config/database');

const app = express();
const port = 3000;

app.use(bodyParser.json());

db.authenticate().then(() => {
	console.log(`database connected.`);
}).catch(err => {
	console.log(`error connecting to database: ${err}`);
})

app.use('/', routes);

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

module.exports = app;