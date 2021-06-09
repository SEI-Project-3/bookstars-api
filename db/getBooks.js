const axios = require('axios');
const fs = require('fs');

const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Har2JGxlbuOpjx3lnsMAWb4MPCzfGO3u`;

axios
	.get(url)
	.then((res) => res.data.results.books)
	.then((data) =>
		data.map((book) => ({
			title: book.title,
			author: book.author,
			book_image: book.book_image,
			description: book.description,
			amazon_product_url: book.amazon_product_url,
		}))
	)
	.then((success) => {
		let stringified = JSON.stringify(success);
		fs.writeFile(__dirname + '/books.json', stringified, 'utf8', (err) => {
			if (err) {
				console.error(err);
			} else {
				console.log(`yay`);
			}
		});
	});
