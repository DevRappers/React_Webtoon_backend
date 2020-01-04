const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
	res.send({ message: 'Hello Express!' });
});

app.listen(port, () => console.log(`웹툰 서버 독장중 http://localhost:${port}`));
