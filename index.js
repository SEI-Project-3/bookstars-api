const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Controllers
const bookController = require('./controllers/books');
app.use('/api/books', bookController);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Books API running on ${port}`);
});
