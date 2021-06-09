const mongoose = require('../db/connection');

const BookSchema = new mongoose.Schema({
	title: String,
	author: String,
	book_image: String,
	description: String,
	amazon_product_url: String,
	ratings: [{ type: Number }],
	reviews: [{ type: String }],
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
