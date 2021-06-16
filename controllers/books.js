const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

// router.get('/', (req, res, next) => {
// 	Book.find({})
// 		.then((books) => {
// 			res.json(books);
// 		})
// 		.catch(next);
// });

router.post('/title/:title', (req, res, next) => {
	Book.create(req.body)
		.then((book) => {
			res.status(201).json(book);
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

router.patch('/title/:title', async (req, res, next) => {
	try {
		const book = await Book.findOne({ title: req.body.title });

		if (!book) {
			const newBook = await Book.create({
				title: req.body.title,
				ratings: req.body.ratings,
				reviews: req.body.reviews,
			});
			return res.json({ book: newBook });
		} else {
			book.ratings = req.body.ratings;
			book.reviews = req.body.reviews;
			await book.save();
			res.json(book);
		}
	} catch (err) {
		res.json(err);
	}
});

module.exports = router;
