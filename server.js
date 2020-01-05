const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

// json형식으로 하겠다.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
	res.send([
		{
			id: 1,
			image: 'https://placeimg.com/64/64/1',
			name: '이재준',
			birthday: '980326',
			gender: '남자',
			job: 'developer'
		},
		{
			id: 2,
			image: 'https://placeimg.com/64/64/2',
			name: '테스트유저',
			birthday: '910208',
			gender: '여자',
			job: '디자이너'
		},
		{
			id: 3,
			image: 'https://placeimg.com/64/64/3',
			name: '이재영',
			birthday: '950815',
			gender: '남자',
			job: '직장인'
		}
	]);
});

app.listen(port, () => console.log(`웹툰 서버 동작중 http://localhost:${port}`));
