// const axios = require('axios');
// const fs = require('fs');

// const bookData = [];

// const urlFiction = `https://api.nytimes.com/svc/books/v3/lists/current/combined-print-fiction.json?api-key=Har2JGxlbuOpjx3lnsMAWb4MPCzfGO3u`;
// const urlNonfiction = `https://api.nytimes.com/svc/books/v3/lists/current/combined-print-nonfiction.json?api-key=Har2JGxlbuOpjx3lnsMAWb4MPCzfGO3u`;
// const urlYoungAdult = `https://api.nytimes.com/svc/books/v3/lists/current/young-adult.json?api-key=Har2JGxlbuOpjx3lnsMAWb4MPCzfGO3u`;
// const urlMiddleGrade = `https://api.nytimes.com/svc/books/v3/lists/current/childrens-middle-grade.json?api-key=Har2JGxlbuOpjx3lnsMAWb4MPCzfGO3u`;
// const urlChildrens = `https://api.nytimes.com/svc/books/v3/lists/current/picture-books.json?api-key=Har2JGxlbuOpjx3lnsMAWb4MPCzfGO3u`;

// const apiEndpoints = [
// 	{type: 'fiction', url: urlFiction },
// 	{type: 'nonfiction', url: urlNonfiction},
// 	{type: 'youngAdult', url: urlYoungAdult},
// 	{type: 'middleGrade', url: urlMiddleGrade},
// 	{type: 'childrens', url: urlChildrens}
// ]

// Promise.all(apiEndpoints.map((endpointObject) => {
//  return axios
// 	.get(endpointObject.url)
// 	.then((res) => res.data.results.books)
// 	.then((data) => {
// 		bookData.push(...data.map((book) => ({
// 			title: book.title,
// 			author: book.author,
// 			book_image: book.book_image,
// 			description: book.description,
// 			type: endpointObject.type,
// 			amazon_product_url: book.amazon_product_url,
// 		})))
// 	}
// 	)
// 	.then((success) => {
// 		let stringified = JSON.stringify(success);
// 		fs.writeFile(__dirname + '/books.json', stringified, 'utf8', (err) => {
// 			if (err) {
// 				console.error(err);
// 			} else {
// 				console.log(`yay`);
// 			}
// 		})
// });
