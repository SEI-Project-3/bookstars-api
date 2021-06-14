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

router.get('/title/:title', (req, res, next) => {
	Book.findOne({
		title: req.params.title,
	})
		.then((book) => {
			res.json(book);
		})
		.catch(next);
});

router.get('/type/:type', (req, res, next) => {
	Book.find({
		type: req.params.type,
	})
		.then((book) => {
			res.json(book);
		})
		.catch(next);
});

router.patch('/title/:title', (req, res, next) => {
	const { ratings, reviews } = req.body;
	Book.findOneAndUpdate(
		{
			title: req.params.title,
		},
		{ ratings, reviews },
		{ new: true }
	)
		.then((book) => {
			res.json(book);
		})
		.catch(next);
});

module.exports = router;
