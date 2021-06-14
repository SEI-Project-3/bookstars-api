const mongoose = require('../db/connection');

const BookSchema = new mongoose.Schema({
	title: String,
	ratings: [{ type: Number }],
	reviews: [{ type: String }],
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
