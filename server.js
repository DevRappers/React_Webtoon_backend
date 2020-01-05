const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 5000;

// json형식으로 하겠다.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);

const connection = mysql.createConnection({
	host: conf.host,
	user: conf.user,
	password: conf.password,
	port: conf.port,
	database: conf.database
});
connection.connect();

app.get('/api/webtoons', (req, res) => {
	connection.query('SELECT * FROM WEBTOON', (err, rows, fields) => {
		res.send(rows);
	});
});

app.listen(port, () => console.log(`웹툰 서버 동작중 http://localhost:${port}`));
