const mongoose = require('mongoose');

const mongoURI =
	'mongodb+srv://user:pw@cluster0.xvkad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// process.env.NODE_ENV === 'production'
// 	? process.env.DB_URL
// 	: 'mongodb://localhost/books';

mongoose
	.connect(mongoURI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then((instance) =>
		console.log(`Connected to db: ${instance.connections[0].name}`)
	)
	.catch(console.error);

module.exports = mongoose;
