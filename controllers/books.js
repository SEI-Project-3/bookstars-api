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

router.get('/:id', (req, res, next) => {
	Book.findById(req.params.id)
		.then((book) => {
			res.json(book);
		})
		.catch(next);
});

router.patch('/:id', (req, res, next) => {
	Book.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	})
		.then((book) => {
			res.json(book);
		})
		.catch(next);
});

module.exports = router;
