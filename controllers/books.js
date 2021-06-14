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
		const book = await Book.findOne({ title: req.params.title });

		if (!book) {
			const newBook = await Book.create({
				title: req.params.title,
				ratings: [req.body.rating],
				reviews: [req.body.review],
			});
			return res.json({ book: newBook });
		} else {
			book.ratings.push(req.body.rating);
			book.reviews.push(req.body.review);
			await book.save();
			res.json(book);
		}
	} catch (err) {
		res.json(err);
	}

	// const { ratings, reviews } = req.body;
	// Book.findOneAndUpdate(
	// 	{
	// 		title: req.params.title,
	// 	},
	// 	{ ratings, reviews },
	// 	{ new: true }
	// )
	// 	.then((book) => {
	// 		res.json(book);
	// 	})
	// 	.catch(next);
});

module.exports = router;
