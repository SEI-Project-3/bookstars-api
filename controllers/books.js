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

router.patch('/', (req, res, next) => {
	Book.find({})
		.then((books) => {
			res.json(books);
		})
		.catch(next);
});

router.patch('/', (req, res, next) => {
	Book.find({})
		.then((books) => {
			res.json(books);
		})
		.catch(next);
});
