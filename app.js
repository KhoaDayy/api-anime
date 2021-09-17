//don't steal my code!!
const express = require('express');
const data = require('./MOCK_DATA.json');

const app = express();

app.use((req, res) => {
        const {img} = data[Math.round(Math.random() * data.length)];
        const {author} = data[Math.round(Math.random() * data.length)];
        return res.json({ img, author });
});

app.listen(4000, () => console.log('Sever is running'));
