'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let knex = require('knex')({
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'asundar',
		password: 'some_pass',
		database: 'chatRoom'
	}
});

let app = express();
app.use(bodyParser.json());
let PORT = 8000;
let MESSAGES_TABLE = 'messages';

// Store messages to database

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', (req, res) => {
	console.log('Attempting a POST');
	knex(MESSAGES_TABLE).insert({text: req.body.text})
	.then (function (result) {
		console.log(result);

		res.json({ success: true, message: 'ok' });
	});
});

app.get('/', (req, res) => {
	var messages = knex.select().table(MESSAGES_TABLE)
	.then (function (result) {
		console.log(result);

		res.send({'messages': result});
	})
});

console.log('Listening at port:' + PORT);
app.listen(PORT);
