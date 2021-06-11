const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

router.get('/', (req, res, next) => {
	Book.find({})
		.then((books) => {
			res.json(books);
		})
		.catch(next);
});

router.get('/:title', (req, res, next) => {
	Book.findOne({
		title: req.params.title,
	})
		.then((book) => {
			res.json(book);
		})
		.catch(next);
});

router.patch('/:title', (req, res, next) => {
	Book.findOneAndUpdate(
		{
			title: req.params.title,
		},
		req.body,
		{ new: true }
	)
		.then((book) => {
			res.json(book);
		})
		.catch(next);
});

module.exports = router;
